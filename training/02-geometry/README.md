### BoxGeometry

#### Parameters

```js
const geometry = new THREE.BoxGeometry(
  width,
  height,
  depth,
  widthSegments,
  heightSegments,
  depthSegments
);
```

- `width`: (default value: 1)

- `height`: (default value: 1)

- `depth`: (default value: 1)

- `widthSegments`: (default value: 1)

- `heightSegments`: (default value: 1)

- `depthSegments`: (default value: 1)

### CircleGeometry

#### Parameters

```js
const geometry = new THREE.CircleGeometry(
  radius,
  segments,
  thetaStart,
  thetaLength
);
```

- `radius`: (default value: 1)

- `segments`: (default value: 32, minimum value: 3)

- `thetaStart`: (default value: 0, three o'clock position)

- `thetaLength`: (default value: 2π)

#### Examples

```js
const geometry = new THREE.CircleGeometry(1, 16, 0, Math.PI / 2);
```

- 12시에서 3시까지의 부채꼴이 (90°) 16등분에 나뉘어서 그려진다.

```js
const geometry = new THREE.CircleGeometry(1, 16, Math.PIO / 2, Math.PI / 2);
```

- 9시에서 12시까지의 부채꼴이 (90°) 16등분에 나뉘어서 그려진다.

```js
const geometry = new THREE.CircleGeometry(1, 16, Math.PIO / 2, Math.PI);
```

- 6시에서 12시까지의 반원이 (180°) 16등분에 나뉘어서 그려진다.

### ConeGeometry

#### Parameters

```js
const geometry = new THREE.ConeGeometry(
  radius,
  height,
  radialSegments,
  heightSegments,
  openEnded,
  thetaStart,
  thetaLength
);
```

- `radius`: (default value: 0)

- `height`: (default value: 1)

- `radialSegments`: (default value: 32)

- `heightSegments`: (default value: 1)

- `openEnded`: (default value: false)

- `thetaStart`: (default value: 0)

- `thetaLength`: (default value: 2π)

### CylinderGeometry

#### Parameters

```js
const geometry = new THREE.CylinderGeometry(
  radiusTop,
  radiusBottom,
  height,
  radialSegments,
  heightSegments,
  openEnded,
  thetaStart,
  thetaLength
);
```

- `radiusTop`: (default value: 1)

- `radiusBottom`: (default value: 1)

- `height`: (default value: 1)

- `radialSegments`: (default value: 32)

- `heightSegments`: (default value: 1)

- `openEnded`: (default value: false)

- `thetaStart`: (default value: 0)

- `thetaLength`: (default value: 2π)

### SphereGeometry

#### Parameters

```js
const geometry = new THREE.SphereGeometry(
  radius,
  widthSegments,
  heightSegments,
  phiStart,
  phiLength,
  thetaStart,
  thetaLength
);
```

- `radius`: (default value: 0)

- `widthSegments`: (default value: 32)

- `heightSegments`: (default value: 16, minimum value: 2)

- `phiStart`: (default value: 0)

- `phiLength`: (default value: 2π)

- `thetaStart`: (default value: 0)

- `thetaLength`: (default value: π)

### RingGeometry

#### Parameters

```js
const geometry = new THREE.RingGeometry(
  innerRadius,
  outerRadius,
  thetaSegments,
  phiSegments,
  thetaStart,
  thetaLength
);
```

- `innerRadius`: (default value: 0.5)

- `outerRadius`: (default value: 1)

- `thetaSegments`: (default value: 32, minimum value: 3)

- `phiSegments`: (default value: 1, minimum value: 1)

- `thetaStart`: (default value: 0)

- `thetaLength`: (default value: 2π)

### PlaneGeometry

#### Parameters

```js
const geometry = new THREE.PlaneGeometry(
  width,
  height,
  widthSegments,
  heightSegments
);
```

- `width`: (default value: 1)

- `height`: (default value: 1)

- `widthSegments`: (default value: 1)

- `heightSegments`: (default value: 1)

### TorusGeometry

#### Parameters

```js
const geometry = new THREE.TorusGeometry(
  radius,
  tube,
  radialSegments,
  tubularSegments,
  arc
);
```

- `radius`: (default value: 1)

- `tube`: (default value: 0.4)

- `radialSegments`: (default value: 12)

- `tubularSegments`: (default value: 48)

- `arc`: (default value: 2π)

### TorusKnotGeometry

#### Parameters

```js
const geometry = new THREE.TorusKnotGeometry(
  radius,
  tube,
  tubularSegments,
  radialSegments,
  p,
  q
);
```

- `radius`: (default value: 1)

- `tube`: (default value: 0.4)

- `tubularSegments`: (default value: 64)

- `radialSegments`: (default value: 8)

- `p`: (default value: 2)

- `q`: (default value: 3)

### ShapeGeometry

- Draw square line

  ```js
  const shape = new THREE.Shape();
  shape.moveTo(1, 1);
  shape.lineTo(1, -1);
  shape.lineTo(-1, -1);
  shape.lineTo(-1, 1);
  shape.closePath();
  ```

### TubeGeometry

#### Parameters

```js
const geometry = new THREE.TubeGeometry(
  path,
  tubularSegments,
  radius,
  radialSegments,
  closed
);
```

- `path`: (default value: a quadratic bezier curve)

- `tubularSegments`: (default value: 64)

- `radius`: (default value: 1)

- `radialSegments`: (default value: 8)

- `closed`: (default value: false)

### LatheGeometry

#### Parameters

```js
const geometry = new THREE.LatheGeometry(points, segments, phiStart, phiLength);
```

- `points`: (default value: an array with (0,-0.5), (0.5,0) and (0,0.5) which creates a simple diamond shape)

- `segments`: (default value: 12)

- `phiStart`: (default value: 0)

- `phiLength`: (default value: 2π)

### ExtrudeGeometry

#### Parameters

```js
const geometry = new THREE.ExtrudeGeometry(
  curveSegments,
  steps,
  depth,
  bevelEnabled,
  bevelThickness,
  bevelSize,
  bevelOffset,
  bevelSegments,
  extrudePath,
  UVGenerator
);
```

- `curveSegments`: (default value: 12)

- `steps`: (default value: 1)

- `depth`: (default value: 1)

- `bevelEnabled`: (default value: true)

- `bevelThickness`: (default value: 0.2)

- `bevelSize`: (default value: 0.1)

- `bevelOffset`: (default value: 0)

- `bevelSegments`: (default value: 3)

- `extrudePath`

- `UVGenerator`

### LatheGeometry

#### Parameters

```js
const geometry = new THREE.LatheGeometry(
  font,
  size,
  height,
  curveSegments,
  bevelEnabled,
  bevelThickness,
  bevelSize,
  bevelOffset,
  bevelSegments
);
```

- `font`: an instance of THREE.Font.

- `size`: (default value: 100)

- `height`: (default value: 50)

- `curveSegments`: (default value: 12)

- `bevelEnabled`: (default value: false)

- `bevelThickness`: (default value: 10)

- `bevelSize`: (default value: 8)

- `bevelOffset`: (default value: 0)

- `bevelSegments`: (default value: 3)

### Reference

- [BoxGeometry](https://threejs.org/docs/?q=BoxGeometry#api/en/geometries/BoxGeometry)
- [CircleGeometry](https://threejs.org/docs/#api/en/geometries/CircleGeometry)
- [ConeGeometry](https://threejs.org/docs/?q=ConeGeometry#api/en/geometries/ConeGeometry)
- [CylinderGeometry](https://threejs.org/docs/?q=cylinder#api/en/geometries/CylinderGeometry)
- [SphereGeometry](https://threejs.org/docs/?q=spheregeo#api/en/geometries/SphereGeometry)
- [RingGeometry](https://threejs.org/docs/?q=ring#api/en/geometries/RingGeometry)
- [PlaneGeometry](https://threejs.org/docs/?q=plan#api/en/geometries/PlaneGeometry)
- [TorusGeometry](https://threejs.org/docs/?q=torus#api/en/geometries/TorusGeometry)
- [TorusKnotGeometry](https://threejs.org/docs/?q=torus#api/en/geometries/TorusKnotGeometry)
- [ShapeGeometry](https://threejs.org/docs/?q=ShapeGeometry#api/en/geometries/ShapeGeometry)
- [TubeGeometry](https://threejs.org/docs/?q=TubeGeometry#api/en/geometries/TubeGeometry)
- [LatheGeometry](https://threejs.org/docs/?q=lathe#api/en/geometries/LatheGeometry)
- [ExtrudeGeometry](https://threejs.org/docs/?q=Extrude#api/en/geometries/ExtrudeGeometry)
- [TextGeometry](https://threejs.org/docs/?q=TextGeometry#examples/en/geometries/TextGeometry)
