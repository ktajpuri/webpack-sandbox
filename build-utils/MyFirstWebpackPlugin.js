class MyFirstWebpackPlugin {

  apply(compiler) {
    compiler.hooks.done.tapAsync("MyFirstWebpackPlugin", (stats, cb) => {
      const assetNames = [];
      for (let assetName in stats.compilation.assets) {
        assetNames.push(assetName);
      }
      console.log("\n\n\n************VEDANTU************\n\n")
      console.log(assetNames.join("\n"));
      console.log("\n\n************_______************\n\n\n")
      cb();
    })

    compiler.hooks.compilation.tap("MyFirstWebpackPlugin", (compilation, params) => {
      const thisCOmpilation = compilation;
      // compilation.hooks.seal.tap("MyFirstWebpackPlugin", () => {
      //   console.log(thisCOmpilation);
      //   debugger
      // })
      compilation.hooks.buildModule.tap("MyFirstWebpackPlugin", () => {
        console.log(thisCOmpilation.name);
      })
    })
  }
}

module.exports = MyFirstWebpackPlugin;