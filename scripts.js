const str = document.getElementById("login").innerText.split("\n")[3];
const nums = str.match(/(\d+)/g);
var ans = 0;
if (str.match("add")) {
  ans = +nums[0] + +nums[1];
  document.getElementById("valuepkg3").value = ans.toString();
} else if (str.match("subtract")) {
  ans = +nums[0] - +nums[1];
  document.getElementById("valuepkg3").value = ans.toString();
} else if (str.match("first")) {
  document.getElementById("valuepkg3").value = nums[0];
} else if (str.match("second")) {
  document.getElementById("valuepkg3").value = nums[1];
}
