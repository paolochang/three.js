import * as THREE from "../../../build/three.module.js";
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
		camera.position.z = 15;
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
	 * To understan TubeGeometry, let's check Curve class first
	 */
	_setupModel() {
		class CustomSinCurve extends THREE.Curve {
			constructor(scale) {
				super();
				this.scale = scale;
			}
			getPoint(t) {
				const tx = t * 3 - 1.5;
				const ty = Math.sin(2 * Math.PI * t);
				const tz = 0;
				return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);
			}
		}

		const path = new CustomSinCurve(4);

		const geometry = new THREE.BufferGeometry();
		const points = path.getPoints(32); // points on the curve, default value: 5
		geometry.setFromPoints(points);

		const material = new THREE.LineBasicMaterial({ color: 0x39ff14 });
		const line = new THREE.Line(geometry, material);

		this._scene.add(line);
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
