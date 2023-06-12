varying vec2 vUv;

uniform float uTime;
uniform float uProgress;

attribute float aRandom;
attribute vec3 aCenter;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    
    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
	mat4 m = rotationMatrix(axis, angle);
	return (m * vec4(v, 1.0)).xyz;
}

void main(){
  vUv = uv;

  vec3 pos = position;

  // change position of each indiviual triangles along their normals
  // pos += aRandom * uProgress * normal;

    // rotate along the y-axis
  // pos = rotate(pos, vec3(0.0,1.0,0.0), aRandom * uProgress *10.0);

  // pos = (pos - aCenter) * abs(sin(uTime *0.5 * aRandom) * aRandom) + aCenter;
  
  // normalizing postion
  pos = (pos - aCenter);

  // scaling
  pos *= uProgress;

  // add back positions
  pos += aCenter;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos , 1.0);
}