import * as THREE from "../../../build/three.module.js";
import { FontLoader } from "../../../examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "../../../examples/jsm/geometries/TextGeometry.js";
import { OrbitControls } from "../../../examples/jsm/controls/OrbitControls.js";

class App {
	constructor() {
		const divContainer = document.getElementById("webgl-container");
		this._divContainer = divContainer;

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		divContainer.appendChild(renderer.domElement);
		this._renderer = renderer;

		const scene = new THREE.Scene();
		this._scene = scene;

		this._setupCamera();
		this._setupLight();
		this._setupModel();
		this._setupControls();

		window.onresize = this.resize.bind(this);
		this.resize();

		requestAnimationFrame(this.render.bind(this));
	}

	_setupControls() {
		new OrbitControls(this._camera, this._divContainer);
	}

	_setupCamera() {
		const width = this._divContainer.clientWidth;
		const height = this._divContainer.clientHeight;
		const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);

		camera.position.x = -15;
		camera.position.z = 35;
		this._camera = camera;
	}

	_setupLight() {
		const color = 0xffffff;
		const intensity = 1;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		this._scene.add(light);
	}

	/**
	 * For TextGeometry
	 *
	 * * Parameters
	 *   `font`: an instance of THREE.Font.
	 *   `size`: (default value: 100)
	 *   `height`: (default value: 50)
	 *   `curveSegments`: (default value: 12)
	 *   `bevelEnabled`: (default value: false)
	 *   `bevelThickness`: (default value: 10)
	 *   `bevelSize`: (default value: 8)
	 *   `bevelOffset`: (default value: 0)
	 *   `bevelSegments`: (default value: 3)
	 */
	_setupModel() {
		const fontLoader = new FontLoader();
		async function loadFont(that) {
			const url = "../../../examples/fonts/helvetiker_regular.typeface.json";
			const font = await new Promise((resolve, reject) => {
				fontLoader.load(url, resolve, undefined, reject);
			});

			const geometry = new TextGeometry("Text Geometry", {
				font,
				size: 3,
				height: 1.5,
				curveSegments: 4,
				// settings for ExtrudeGeometry
				bevelEnabled: true,
				bevelThickness: 0.7,
				bevelSize: 0.7,
				bevelSegments: 2,
			});

			const fillMaterial = new THREE.MeshPhongMaterial({ color: 0x515151 });
			const cube = new THREE.Mesh(geometry, fillMaterial);

			const lineMaterial = new THREE.LineBasicMaterial({ color: 0x39ff14 });
			const line = new THREE.LineSegments(
				new THREE.WireframeGeometry(geometry),
				lineMaterial
			);

			const group = new THREE.Group();
			group.add(cube);
			group.add(line);

			that._scene.add(group);
			that._cube = group;
		}

		loadFont(this);
	}

	resize() {
		const width = this._divContainer.clientWidth;
		const height = this._divContainer.clientHeight;

		this._camera.aspect = width / height;
		this._camera.updateProjectionMatrix();

		this._renderer.setSize(width, height);
	}

	render(time) {
		this._renderer.render(this._scene, this._camera);
		this.update(time);
		requestAnimationFrame(this.render.bind(this));
	}

	update(time) {
		time *= 0.001; // second unit
		// this._cube.rotation.x = time;
		// this._cube.rotation.y = time;
	}
}

window.onload = function () {
	new App();
};
