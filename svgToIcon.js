import svgtofont from "svgtofont";
import path from "path";

svgtofont({
  src: path.resolve(process.cwd(), "./src/assets/icons"), // svg 图标目录路径
  dist: path.resolve(process.cwd(), "./dist"), // 输出到指定目录中
  fontName: "tyi", // 设置字体名称
  css: true, // 生成字体文件
  "outSVGVue": true,
  
  useNameAsUnicode: false,
  clssaNamePrefix:'tyi-',
  website: {
    title: "ToyarIcon",
    // Must be a .svg format image.
    // logo: path.resolve(process.cwd(), "svg", "git.svg"),
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG"
    },
    description: ``,
    links: [
      {
        title: "GitHub",
        url: "https://github.com/toyarIcon"
      },
      // {
      //   title: "Feedback",
      //   url: "https://github.com/jaywcjlove/svgtofont/issues"
      // },
      {
        title: "Font Class",
        url: "index.html"
      },
      {
        title: "Unicode",
        url: "unicode.html"
      }
    ],
    footerInfo: `Licensed under MIT. (Yes it's free and <a href="https://github.com/toyarIcon">open-sourced</a>`
  }
}).then(() => {
  console.log("done!");
});
