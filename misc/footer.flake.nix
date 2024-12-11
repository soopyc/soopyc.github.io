{
  inputs = {
    nixpkgs.url = "n";
  };
  outputs = inputs: {
    packages.x86_64-linux.footer = inputs.nixpkgs.legacyPackages.x86_64-linux.writeShellApplication {
      name = "footer";
      text = ''
        echo "test"
      '';
    };
  };
}
