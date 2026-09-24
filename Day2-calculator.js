<!DOCTYPE html>
<html>
<head>
<title>Calculator</title>
<style>
body { 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  background: #f0f5f0; 
  font-family: Arial;
}
.box {
  background: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 10px gray;
}
input {
  width: 100%;
  height: 50px;
  font-size: 24px;
  text-align: right;
  margin-bottom: 10px;
  border-radius: 8px;
  border: 1px solid gray;
}
button {
  width: 60px;
  height: 60px;
  margin: 5px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
.row { display: flex; justify-content: center; }
.op { background: #4285f4; color: white; }
.eq { background: #34a853; color: white; }
.cl { background: #ea4335; color: white; }
</style>
</head>
<body>

<div class="box">
  <input type="text" id="display" readonly>
  
  <div class="row">
    <button onclick="clr()" class="cl">C</button>
    <button onclick="show('%')">%</button>
    <button onclick="del()">⌫</button>
    <button onclick="show('/')" class="op">/</button>
  </div>
  <div class="row">
    <button onclick="show('7')">7</button>
    <button onclick="show('8')">8</button>
    <button onclick="show('9')">9</button>
    <button onclick="show('*')" class="op">*</button>
  </div>
  <div class="row">
    <button onclick="show('4')">4</button>
    <button onclick="show('5')">5</button>
    <button onclick="show('6')">6</button>
    <button onclick="show('-')" class="op">-</button>
  </div>
  <div class="row">
    <button onclick="show('1')">1</button>
    <button onclick="show('2')">2</button>
    <button onclick="show('3')">3</button>
    <button onclick="show('+')" class="op">+</button>
  </div>
  <div class="row">
    <button onclick="show('0')">0</button>
    <button onclick="show('.')">.</button>
    <button onclick="calc()" class="eq" style="width: 130px;">=</button>
  </div>
</div>

<script>
let d = document.getElementById('display');
function show(v) { d.value += v; }
function clr() { d.value = ''; }
function del() { d.value = d.value.slice(0, -1); }
function calc() {
  try { d.value = eval(d.value); }
  catch { d.value = 'Error'; }
}
</script>

</body>
</html>