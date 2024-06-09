# dev.nix

{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.bash       # Bash shell
    pkgs.git        # Git version control
    pkgs.python38   # Python 3.8
    pkgs.nodejs     # Node.js runtime
    pkgs.vscode     # Visual Studio Code editor
    pkgs.sudo     
    pkgs.openssl_3_1.bin
  ];
}
