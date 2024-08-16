const { spawnSync } = require("child_process");
const os = require("os");

function chooseBinary() {
  const platform = os.platform(); // 'linux' or 'win32'
  const arch = os.arch(); // 'x64' or 'arm64'

  let binaryName;
  if (platform === "linux" && arch === "x64") {
    binaryName = "main-linux-amd64";
  } else if (platform === "linux" && arch === "arm64") {
    binaryName = "main-linux-arm64";
  } else if (platform === "win32" && arch === "x64") {
    binaryName = "main-windows-amd64.exe";
  } else if (platform === "win32" && arch === "arm64") {
    binaryName = "main-windows-arm64.exe";
  } else {
    throw new Error(
      `Unsupported platform ${platform} and architecture ${arch}`
    );
  }

  return binaryName;
}

const binary = chooseBinary();
const mainScript = `${__dirname}/${binary}`;

const result = spawnSync(mainScript, [], { stdio: "inherit" });
if (result.error) {
  console.error(result.error);
  process.exit(1);
}
