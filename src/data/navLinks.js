/**
统一分类opensource
网站：
github
baidu.com
谷歌
具体按照以下样式生成，使用“JavaScript风格格式+单引号”，不要添加"icon字段"和"[]""      
      {
      id: 'github',
      title: 'GitHub',
      description: '全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。'
      shortDesc: '代码托管平台。',
      url: 'https://github.com/',
      category: 'opensource',
      },
描述根据网站实际内容,专业,准确,介绍背景独特优势等等,不要太刻板,臃肿,重复
自动下载图标脚本执行:
npx tsx icon-system/0icon.ts
*/
/**
 * 网站分类列表
 * @type {Array<{id: string, name: string, icon: string}>}
 */
export const categories = [
  {
    id: 'opensource',
    name: '开源平台', icon: '/icons/category/opensource.svg',
  },
  {
    id: 'Studying',
    name: '个人其他站点', icon: '/icons/category/studying.svg',
  },
  {
    id: 'pages',
    name: '静态部署平台', icon: '/icons/category/pages.svg',
  },
];
/**
 * 网站列表
 * @type {Array<{id: string, title: string, description: string, shortDesc: string, url: string, icon: string, category: string}>}
 */
export const sites = [
  //开源      
      [
  {
    "id": "github",
    "title": "GitHub",
    "description": "全球最大的开源代码托管平台，支持 Git 版本控制，适用于协作开发、项目管理和自动化工作流，是开发者共享与协作的核心工具。",
    "shortDesc": "代码托管平台。",
    "url": "https://github.com/",
    "category": "opensource"
  },
  {
    "id": "1",
    "title": "发现导航",
    "description": "发现导航, 最强轻量级导航网站",
    "shortDesc": "发现导航, 最强轻量级导航网站。",
    "url": "https://github.com/xjh22222228/nav",
    "category": "开发相关"
  },
  {
    "id": "2",
    "title": "Github-CLI",
    "description": "GitHub的官方命令行工具",
    "shortDesc": "GitHub的官方命令行工具。",
    "url": "https://cli.github.com",
    "category": "开发相关"
  },
  {
    "id": "3",
    "title": "Coveralls",
    "description": "通过显示测试套件未涵盖代码的哪些部分，我们可以帮助您自信地交付代码。免费提供开源软件库",
    "shortDesc": "通过显示测试套件未涵盖代码的哪些部分，我们可以帮助您自信地交付代码。免费提供开源软件库。",
    "url": "https://coveralls.io",
    "category": "开发相关"
  },
  {
    "id": "4",
    "title": "Releasly",
    "description": "在新的开源版本发布时收到通知，直接发送到您的电子邮件中。",
    "shortDesc": "在新的开源版本发布时收到通知，直接发送到您的电子邮件中。",
    "url": "https://www.releasly.co",
    "category": "开发相关"
  },
  {
    "id": "5",
    "title": "Convert cURL",
    "description": "将curl命令转换为Python，JavaScript，PHP，R，Go，Rust，Dart，JSON，Ansible，Elixir。",
    "shortDesc": "将curl命令转换为Python，JavaScript，PHP，R，Go，Rust，Dart，JSON，Ansible，Elixir。",
    "url": "https://curl.trillworks.com",
    "category": "开发相关"
  },
  {
    "id": "6",
    "title": "Supervisor",
    "description": "Supervisor是一个客户端/服务器系统，允许其用户监视和控制类似UNIX的操作系统上的多个进程。",
    "shortDesc": "Supervisor是一个客户端/服务器系统，允许其用户监视和控制类似UNIX的操作系统上的多个进程。",
    "url": "http://supervisord.org",
    "category": "开发相关"
  },
  {
    "id": "7",
    "title": "SonarQube",
    "description": "代码质量和安全性检查, 支持所有开发人员编写更干净，更安全的代码。",
    "shortDesc": "代码质量和安全性检查, 支持所有开发人员编写更干净，更安全的代码。",
    "url": "https://www.sonarqube.org",
    "category": "开发相关"
  },
  {
    "id": "8",
    "title": "Pastebin",
    "description": "在线共享代码，将代码以URL形式发送以便查看",
    "shortDesc": "在线共享代码，将代码以URL形式发送以便查看。",
    "url": "https://paste.ubuntu.com",
    "category": "开发相关"
  },
  {
    "id": "9",
    "title": "UPX",
    "description": "UPX-可执行文件的终极打包器",
    "shortDesc": "UPX-可执行文件的终极打包器。",
    "url": "https://github.com/upx/upx",
    "category": "开发相关"
  },
  {
    "id": "10",
    "title": "askgit",
    "description": "使用SQL查询git存储库。生成报告，执行状态检查，分析代码库。",
    "shortDesc": "使用SQL查询git存储库。生成报告，执行状态检查，分析代码库。",
    "url": "https://github.com/augmentable-dev/askgit",
    "category": "开发相关"
  },
  {
    "id": "11",
    "title": "Sentry",
    "description": "Web应用程序，移动应用程序和游戏的实时崩溃报告。",
    "shortDesc": "Web应用程序，移动应用程序和游戏的实时崩溃报告。",
    "url": "https://sentry.io",
    "category": "开发相关"
  },
  {
    "id": "12",
    "title": "randomuser",
    "description": "随机用户生成器是用于生成占位符用户信息的免费API。 获取个人资料照片，姓名等。 对于人们来说，就像Lorem Ipsum。",
    "shortDesc": "随机用户生成器是用于生成占位符用户信息的免费API。 获取个人资料照片，姓名等。 对于人们来说，就像Lorem Ipsum。",
    "url": "https://randomuser.me",
    "category": "开发相关"
  },
  {
    "id": "13",
    "title": "github-readme-stats",
    "description": "在你的 README 中 获取动态生成的 GitHub 统计信息",
    "shortDesc": "在你的 README 中 获取动态生成的 GitHub 统计信息。",
    "url": "https://github.com/anuraghazra/github-readme-stats/blob/master/readme_cn.md",
    "category": "开发相关"
  },
  {
    "id": "14",
    "title": "Hits",
    "description": "了解有多少人正在查看您的GitHub项目的简单方法",
    "shortDesc": "了解有多少人正在查看您的GitHub项目的简单方法。",
    "url": "http://hits.dwyl.io",
    "category": "开发相关"
  },
  {
    "id": "15",
    "title": "GitHub 文件加速",
    "description": "GitHub 文件加速",
    "shortDesc": "GitHub 文件加速。",
    "url": "https://shrill-pond-3e81.hunsh.workers.dev",
    "category": "开发相关"
  },
  {
    "id": "16",
    "title": "Shields IO",
    "description": "svg生成版本号图标",
    "shortDesc": "svg生成版本号图标。",
    "url": "https://shields.io",
    "category": "开发相关"
  },
  {
    "id": "17",
    "title": "FunDebug",
    "description": "支持前端JavaScript，后端Node.js以及微信小程序错误监控",
    "shortDesc": "支持前端JavaScript，后端Node.js以及微信小程序错误监控。",
    "url": "https://www.fundebug.com",
    "category": "开发相关"
  },
  {
    "id": "18",
    "title": "Asciiworld",
    "description": "WA！原来那些年程序猿搞怪的注释都在这里",
    "shortDesc": "WA！原来那些年程序猿搞怪的注释都在这里。",
    "url": "http://www.asciiworld.com",
    "category": "开发相关"
  },
  {
    "id": "19",
    "title": "jsfiddle",
    "description": "强大的前端代码在线演示的网站",
    "shortDesc": "强大的前端代码在线演示的网站。",
    "url": "http://jsfiddle.net",
    "category": "开发相关"
  },
  {
    "id": "20",
    "title": "CODEIF",
    "description": "变量命名神器",
    "shortDesc": "变量命名神器。",
    "url": "https://unbug.github.io/codelf",
    "category": "开发相关"
  },
  {
    "id": "21",
    "title": "git-quick-stats",
    "description": "git历史统计信息工具",
    "shortDesc": "git历史统计信息工具。",
    "url": "https://github.com/arzzen/git-quick-stats",
    "category": "开发相关"
  },
  {
    "id": "22",
    "title": "gitzip",
    "description": "下载Github仓库子目录或文件",
    "shortDesc": "下载Github仓库子目录或文件。",
    "url": "https://kinolien.github.io/gitzip",
    "category": "开发相关"
  },
  {
    "id": "23",
    "title": "Server酱",
    "description": "「Server酱」，英文名「ServerChan」，是一款「程序员」和「服务器」之间的通信软件。",
    "shortDesc": "「Server酱」，英文名「ServerChan」，是一款「程序员」和「服务器」之间的通信软件。",
    "url": "http://sc.ftqq.com",
    "category": "开发相关"
  },
  {
    "id": "24",
    "title": "mkcert",
    "description": "一个简单的零配置工具，可以使用您喜欢的任何名称制作本地可信赖的SSL开发证书",
    "shortDesc": "一个简单的零配置工具，可以使用您喜欢的任何名称制作本地可信赖的SSL开发证书。",
    "url": "https://github.com/FiloSottile/mkcert",
    "category": "开发相关"
  },
  {
    "id": "25",
    "title": "carbon",
    "description": "创建和分享源代码的精美图像",
    "shortDesc": "创建和分享源代码的精美图像。",
    "url": "https://carbon.now.sh",
    "category": "开发相关"
  },
  {
    "id": "26",
    "title": "setup-ipsec-vpn",
    "description": "用于构建您自己的IPsec VPN服务器的脚本，在Ubuntu，Debian和CentOS上使用IPsec / L2TP和Cisco IPsec",
    "shortDesc": "用于构建您自己的IPsec VPN服务器的脚本，在Ubuntu，Debian和CentOS上使用IPsec / L2TP和Cisco IPsec。",
    "url": "https://github.com/hwdsl2/setup-ipsec-vpn",
    "category": "开发相关"
  },
  {
    "id": "27",
    "title": "nginxconfig",
    "description": "nginx配置生成器",
    "shortDesc": "nginx配置生成器。",
    "url": "https://www.digitalocean.com/community/tools/nginx#?",
    "category": "开发相关"
  },
  {
    "id": "28",
    "title": "GraphQL Explorer",
    "description": "GraphQL资源管理器利用真实的、实时的生产数据",
    "shortDesc": "GraphQL资源管理器利用真实的、实时的生产数据。",
    "url": "https://developer.github.com/v4/explorer",
    "category": "开发相关"
  },
  {
    "id": "29",
    "title": "patorjk",
    "description": "将文本转换成ASCII",
    "shortDesc": "将文本转换成ASCII。",
    "url": "http://patorjk.com/software/taag/#p=display&f=Graffiti&t=xiejiahe",
    "category": "开发相关"
  },
  {
    "id": "30",
    "title": "lens",
    "description": "Lens控制Kubernetes集群所需的唯一IDE。它是适用于MacOS，Windows和Linux操作系统的独立应用程序。它是开源的，免费的。",
    "shortDesc": "Lens控制Kubernetes集群所需的唯一IDE。它是适用于MacOS，Windows和Linux操作系统的独立应用程序。它是开源的，免费的。",
    "url": "https://k8slens.dev",
    "category": "开发相关"
  },
  {
    "id": "31",
    "title": "public-apis",
    "description": "一些可用在 Web 或软件开发的开放 API 接口",
    "shortDesc": "一些可用在 Web 或软件开发的开放 API 接口。",
    "url": "https://github.com/public-apis/public-apis",
    "category": "开发相关"
  },
  {
    "id": "32",
    "title": "astexplorer",
    "description": "一个Web工具，用于探索由各种解析器生成的AST",
    "shortDesc": "一个Web工具，用于探索由各种解析器生成的AST。",
    "url": "https://astexplorer.net",
    "category": "开发相关"
  },
  {
    "id": "33",
    "title": "uTools",
    "description": "uTools是一个极简、插件化、跨平台的现代桌面软件。通过自由选配丰富的插件，打造你得心应手的工具集合",
    "shortDesc": "uTools是一个极简、插件化、跨平台的现代桌面软件。通过自由选配丰富的插件，打造你得心应手的工具集合。",
    "url": "http://www.u.tools",
    "category": "开发相关"
  },
  {
    "id": "34",
    "title": "ihateregex",
    "description": "正则表达式备忘录",
    "shortDesc": "正则表达式备忘录。",
    "url": "https://ihateregex.io",
    "category": "开发相关"
  },
  {
    "id": "35",
    "title": "Oh My ZSH",
    "description": "是一个开放源代码，社区驱动的框架，用于管理zsh配置。",
    "shortDesc": "是一个开放源代码，社区驱动的框架，用于管理zsh配置。",
    "url": "https://ohmyz.sh",
    "category": "开发相关"
  },
  {
    "id": "36",
    "title": "Tampermonkey",
    "description": "一款免费的浏览器扩展和最为流行的用户脚本管理器",
    "shortDesc": "一款免费的浏览器扩展和最为流行的用户脚本管理器。",
    "url": "https://www.tampermonkey.net",
    "category": "开发相关"
  },
  {
    "id": "37",
    "title": "Greasy Fork",
    "description": "提供用户脚本的网站",
    "shortDesc": "提供用户脚本的网站。",
    "url": "https://greasyfork.org/zh-CN",
    "category": "开发相关"
  },
  {
    "id": "38",
    "title": "免费代理",
    "description": "免费HTTP代理IP",
    "shortDesc": "免费HTTP代理IP。",
    "url": "https://www.kuaidaili.com/free/inha/1",
    "category": "开发相关"
  },
  {
    "id": "39",
    "title": "Google Workspace",
    "description": "Google Workspace状态信息中心",
    "shortDesc": "Google Workspace状态信息中心。",
    "url": "https://www.google.com/appsstatus#hl=en&v=status",
    "category": "开发相关"
  },
  {
    "id": "40",
    "title": "eoLinker接口管理平台",
    "description": "国内最大的在线接口管理服务方案供应商",
    "shortDesc": "国内最大的在线接口管理服务方案供应商。",
    "url": "https://www.eolinker.com",
    "category": "接口"
  },
  {
    "id": "41",
    "title": "YApi",
    "description": "YApi 是一个可本地部署的、打通前后端及QA的、可视化的接口管理平台",
    "shortDesc": "YApi 是一个可本地部署的、打通前后端及QA的、可视化的接口管理平台。",
    "url": "https://yapi.baidu.com",
    "category": "接口"
  },
  {
    "id": "42",
    "title": "RAP2",
    "description": "Web接口管理工具，开源免费，接口自动化，MOCK数据自动生成，自动化测试，企业级管理。阿里妈妈MUX团队出品",
    "shortDesc": "Web接口管理工具，开源免费，接口自动化，MOCK数据自动生成，自动化测试，企业级管理。阿里妈妈MUX团队出品。",
    "url": "http://rap2.taobao.org",
    "category": "接口"
  },
  {
    "id": "43",
    "title": "showdoc",
    "description": "一个非常适合IT团队的在线API文档、技术文档工具",
    "shortDesc": "一个非常适合IT团队的在线API文档、技术文档工具。",
    "url": "https://www.showdoc.cc",
    "category": "接口"
  },
  {
    "id": "44",
    "title": "docsify",
    "description": "一个神奇的文档站点生成器",
    "shortDesc": "一个神奇的文档站点生成器。",
    "url": "https://docsify.js.org",
    "category": "接口"
  },
  {
    "id": "45",
    "title": "apiDoc",
    "description": "RESTful Web API文档生成器",
    "shortDesc": "RESTful Web API文档生成器。",
    "url": "http://apidocjs.com",
    "category": "接口"
  },
  {
    "id": "46",
    "title": "docusaurus",
    "description": "易于维护的开源文档网站",
    "shortDesc": "易于维护的开源文档网站。",
    "url": "https://docusaurus.io",
    "category": "接口"
  },
  {
    "id": "47",
    "title": "禅道",
    "description": "禅道是灵活的项目管理软件",
    "shortDesc": "禅道是灵活的项目管理软件。",
    "url": "https://www.zentao.net",
    "category": "接口"
  },
  {
    "id": "48",
    "title": "Tapd",
    "description": "一站式敏捷研发协作云平台, 凝聚腾讯研发方法及敏捷实践精髓, 助力企业研发更高效、协作更敏捷",
    "shortDesc": "一站式敏捷研发协作云平台, 凝聚腾讯研发方法及敏捷实践精髓, 助力企业研发更高效、协作更敏捷。",
    "url": "https://www.tapd.cn",
    "category": "接口"
  },
  {
    "id": "49",
    "title": "Hoppscotch",
    "description": "一个免费，快速，美观的API请求构建器，供10万多个开发人员使用。(原名叫 Postwoman)",
    "shortDesc": "一个免费，快速，美观的API请求构建器，供10万多个开发人员使用。(原名叫 Postwoman)。",
    "url": "https://hoppscotch.io",
    "category": "接口"
  },
  {
    "id": "50",
    "title": "Sunny-Ngrok",
    "description": "一条命令解决的外网访问内网问题，无需任何配置，下载客户端之后直接一条命令让外网访问您的内网不再是距离",
    "shortDesc": "一条命令解决的外网访问内网问题，无需任何配置，下载客户端之后直接一条命令让外网访问您的内网不再是距离。",
    "url": "https://www.ngrok.cc",
    "category": "内网穿透"
  },
  {
    "id": "51",
    "title": "frp",
    "description": "一个快速反向代理，可帮助您将NAT或防火墙后面的本地服务器暴露给Internet。",
    "shortDesc": "一个快速反向代理，可帮助您将NAT或防火墙后面的本地服务器暴露给Internet。",
    "url": "https://github.com/fatedier/frp",
    "category": "内网穿透"
  },
  {
    "id": "52",
    "title": "zan-proxy",
    "description": "本地代码调试线上页面，环境再也不是问题",
    "shortDesc": "本地代码调试线上页面，环境再也不是问题。",
    "url": "https://youzan.github.io/zan-proxy",
    "category": "内网穿透"
  },
  {
    "id": "53",
    "title": "ngrok",
    "description": "ngrok是一个反向代理，通过在公共的端点和本地运行的 Web 服务器之间建立一个安全的通道。ngrok可捕获和分析所有通道上的流量，便于后期分析和重放",
    "shortDesc": "ngrok是一个反向代理，通过在公共的端点和本地运行的 Web 服务器之间建立一个安全的通道。ngrok可捕获和分析所有通道上的流量，便于后期分析和重放。",
    "url": "https://ngrok.com",
    "category": "内网穿透"
  },
  {
    "id": "54",
    "title": "查MD5",
    "description": "MD5在线解密|md5在线破解|批量破解md5网站",
    "shortDesc": "MD5在线解密|md5在线破解|批量破解md5网站。",
    "url": "http://www.cmd5.com",
    "category": "编码"
  },
  {
    "id": "55",
    "title": "JSON Web Tokens",
    "description": "jwt 在线解码",
    "shortDesc": "jwt 在线解码。",
    "url": "https://jwt.io",
    "category": "编码"
  },
  {
    "id": "56",
    "title": "base64",
    "description": "base64在线解码编码",
    "shortDesc": "base64在线解码编码。",
    "url": "http://base64.xpcha.com",
    "category": "编码"
  },
  {
    "id": "57",
    "title": "ipify",
    "description": "一个简单的公共IP地址API",
    "shortDesc": "一个简单的公共IP地址API。",
    "url": "https://www.ipify.org",
    "category": "免费公开API"
  },
  {
    "id": "58",
    "title": "归属地查询",
    "description": "淘宝免费归属地查询",
    "shortDesc": "淘宝免费归属地查询。",
    "url": "https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=13333333333",
    "category": "免费公开API"
  },
  {
    "id": "59",
    "title": "draw",
    "description": "免费的在线图表软件，用于制作流程图、流程图、组织图、UML、ER和网络图",
    "shortDesc": "免费的在线图表软件，用于制作流程图、流程图、组织图、UML、ER和网络图。",
    "url": "https://www.draw.io",
    "category": "设计相关"
  },
  {
    "id": "60",
    "title": "ProcessOn",
    "description": "免费在线作图工具,UML作图,UI界面原型设计,iOS原型设计,BPMN,流程图,思维导图,多人协作绘...",
    "shortDesc": "免费在线作图工具,UML作图,UI界面原型设计,iOS原型设计,BPMN,流程图,思维导图,多人协作绘...。",
    "url": "https://www.processon.com",
    "category": "设计相关"
  },
  {
    "id": "63",
    "title": "幕布",
    "description": "极简大纲笔记 | 一键生成思维导图",
    "shortDesc": "极简大纲笔记 | 一键生成思维导图。",
    "url": "https://mubu.com",
    "category": "设计相关"
  },
  {
    "id": "64",
    "title": "声享",
    "description": "在线制作 PPT，让分享更有价值",
    "shortDesc": "在线制作 PPT，让分享更有价值。",
    "url": "https://ppt.baomitu.com",
    "category": "设计相关"
  },
  {
    "id": "65",
    "title": "墨刀",
    "description": "原型设计工具，web原型设计工具，app原型设计工具",
    "shortDesc": "原型设计工具，web原型设计工具，app原型设计工具。",
    "url": "https://modao.cc/features",
    "category": "设计相关"
  },
  {
    "id": "66",
    "title": "小智LOGO",
    "description": "LOGO在线制作神器 - 3分钟完成LOGO设计在线生成",
    "shortDesc": "LOGO在线制作神器 - 3分钟完成LOGO设计在线生成。",
    "url": "https://xzlogo.com",
    "category": "设计相关"
  },
  {
    "id": "67",
    "title": "创客贴",
    "description": "一款简单易用、功能强大的线上图形设计工具",
    "shortDesc": "一款简单易用、功能强大的线上图形设计工具。",
    "url": "https://www.chuangkit.com",
    "category": "设计相关"
  },
  {
    "id": "68",
    "title": "在线制作图表",
    "description": "信息图表是一种易于使用的信息图表和图表制造商。创建和分享美丽的信息图表，在线报告和互动地图。在这里做你自己",
    "shortDesc": "信息图表是一种易于使用的信息图表和图表制造商。创建和分享美丽的信息图表，在线报告和互动地图。在这里做你自己。",
    "url": "https://infogram.com",
    "category": "设计相关"
  },
  {
    "id": "69",
    "title": "CLIPPING MAGIC",
    "description": "删除图像背景在线。使背景透明，白色等编辑，裁剪，旋转，固定颜色，添加阴影，一款在线抠图工具",
    "shortDesc": "删除图像背景在线。使背景透明，白色等编辑，裁剪，旋转，固定颜色，添加阴影，一款在线抠图工具。",
    "url": "https://clippingmagic.com",
    "category": "设计相关"
  },
  {
    "id": "70",
    "title": "稿定抠图",
    "description": "稿定设计是一款专为淘宝店主、新媒体运营人员和修图爱好者打造的免费在线抠图工具。",
    "shortDesc": "稿定设计是一款专为淘宝店主、新媒体运营人员和修图爱好者打造的免费在线抠图工具。",
    "url": "https://www.gaoding.com/koutu",
    "category": "设计相关"
  },
  {
    "id": "71",
    "title": "UZER.ME",
    "description": "超级应用空间致力于全生命周期的文档管理,无需安装,即可在线编辑Office, CAD,PS等任意格式文档,支持远程协作,全文检索,版本管理,权限管理,安全外发等.提高工作效率,降低安全风险",
    "shortDesc": "超级应用空间致力于全生命周期的文档管理,无需安装,即可在线编辑Office, CAD,PS等任意格式文档,支持远程协作,全文检索,版本管理,权限管理,安全外发等.提高工作效率,降低安全风险。",
    "url": "https://uzer.me/index.html",
    "category": "设计相关"
  },
  {
    "id": "72",
    "title": "launchaco",
    "description": "免费在线制作LOGO",
    "shortDesc": "免费在线制作LOGO。",
    "url": "https://www.launchaco.com/logo",
    "category": "设计相关"
  },
  {
    "id": "73",
    "title": "鹿班",
    "description": "鹿班 - 让设计更美好(阿里出品)",
    "shortDesc": "鹿班 - 让设计更美好(阿里出品)。",
    "url": "https://luban.aliyun.com",
    "category": "设计相关"
  },
  {
    "id": "74",
    "title": "图片裁剪",
    "description": "在线裁剪照片大小尺寸",
    "shortDesc": "在线裁剪照片大小尺寸。",
    "url": "https://www.yasuotu.com/meditor",
    "category": "设计相关"
  },
  {
    "id": "75",
    "title": "Bitwarden",
    "description": "个人和企业在任何设备上存储，共享和保护敏感数据的最简单，最安全的方法",
    "shortDesc": "个人和企业在任何设备上存储，共享和保护敏感数据的最简单，最安全的方法。",
    "url": "https://bitwarden.com",
    "category": "GUI软件"
  },
  {
    "id": "76",
    "title": "Typeora",
    "description": "Typora是一款跨平台的最小Markdown编辑器，可为Markdown读者和作家提供无缝的体验",
    "shortDesc": "Typora是一款跨平台的最小Markdown编辑器，可为Markdown读者和作家提供无缝的体验。",
    "url": "https://typora.io",
    "category": "GUI软件"
  },
  {
    "id": "77",
    "title": "iterm2",
    "description": "iTerm2是Terminal的替代品，是iTerm的后续产品",
    "shortDesc": "iTerm2是Terminal的替代品，是iTerm的后续产品。",
    "url": "https://www.iterm2.com",
    "category": "GUI软件"
  },
  {
    "id": "78",
    "title": "Sourcetree",
    "description": "美丽的Git GUI中的简单性和强大功能",
    "shortDesc": "美丽的Git GUI中的简单性和强大功能。",
    "url": "https://www.sourcetreeapp.com",
    "category": "GUI软件"
  },
  {
    "id": "79",
    "title": "charles",
    "description": "Charles是HTTP代理/ HTTP监视器/反向代理，使开发人员可以查看其计算机与Internet之间的所有HTTP和SSL / HTTPS通信。这包括请求，响应和HTTP标头（其中包含cookie和缓存信息）。",
    "shortDesc": "Charles是HTTP代理/ HTTP监视器/反向代理，使开发人员可以查看其计算机与Internet之间的所有HTTP和SSL / HTTPS通信。这包括请求，响应和HTTP标头（其中包含cookie和缓存信息）。",
    "url": "https://www.charlesproxy.com",
    "category": "GUI软件"
  },
  {
    "id": "80",
    "title": "Tunnelblick",
    "description": "适用于macOS的免费开源OpenVPN VPN客户端服务器软件。",
    "shortDesc": "适用于macOS的免费开源OpenVPN VPN客户端服务器软件。",
    "url": "https://tunnelblick.net",
    "category": "GUI软件"
  },
  {
    "id": "81",
    "title": "Keka",
    "description": "macOS文件存档器, 储存更多，私密分享",
    "shortDesc": "macOS文件存档器, 储存更多，私密分享。",
    "url": "https://www.keka.io",
    "category": "GUI软件"
  },
  {
    "id": "82",
    "title": "Kap",
    "description": "使用Web技术构建的开源屏幕录像机。",
    "shortDesc": "使用Web技术构建的开源屏幕录像机。",
    "url": "https://getkap.co",
    "category": "GUI软件"
  },
  {
    "id": "83",
    "title": "Vscode",
    "description": "VScode是一款轻量级的编辑器，自由。 建立在开源上。 无处不在。",
    "shortDesc": "VScode是一款轻量级的编辑器，自由。 建立在开源上。 无处不在。",
    "url": "https://code.visualstudio.com",
    "category": "GUI软件"
  },
  {
    "id": "84",
    "title": "zenmap",
    "description": "开源免费的网络发现工具，通过它能够找出网络上在线的主机，并测试主机上哪些端口处于监听状态，接着通过端口确定主机上运行的应用程序类型与版本信息，最后利用它还能侦测出操作系统的类型和版本",
    "shortDesc": "开源免费的网络发现工具，通过它能够找出网络上在线的主机，并测试主机上哪些端口处于监听状态，接着通过端口确定主机上运行的应用程序类型与版本信息，最后利用它还能侦测出操作系统的类型和版本。",
    "url": "https://nmap.org/zenmap",
    "category": "GUI软件"
  },
  {
    "id": "85",
    "title": "obsproject",
    "description": "免费和开源软件，用于视频录制和实时流。",
    "shortDesc": "免费和开源软件，用于视频录制和实时流。",
    "url": "https://obsproject.com",
    "category": "GUI软件"
  },
  {
    "id": "86",
    "title": "hyper",
    "description": "基于WEB技术的终端",
    "shortDesc": "基于WEB技术的终端。",
    "url": "https://hyper.is",
    "category": "GUI软件"
  },
  {
    "id": "87",
    "title": "Listary",
    "description": "Listary是Windows的革命性搜索实用程序，它使休闲用户和高级用户都能快速找到文件并启动应用程序！",
    "shortDesc": "Listary是Windows的革命性搜索实用程序，它使休闲用户和高级用户都能快速找到文件并启动应用程序！。",
    "url": "https://www.listary.com",
    "category": "GUI软件"
  },
  {
    "id": "88",
    "title": "vmware",
    "description": "利用VMware提供的软件定义的云，移动性，网络和安全解决方案来建立您的数字基础。",
    "shortDesc": "利用VMware提供的软件定义的云，移动性，网络和安全解决方案来建立您的数字基础。",
    "url": "https://www.vmware.com",
    "category": "虚拟机"
  },
  {
    "id": "89",
    "title": "parallels",
    "description": "Mac和Windows虚拟化|管理Mac|VDI和RDS解决方案",
    "shortDesc": "Mac和Windows虚拟化|管理Mac|VDI和RDS解决方案。",
    "url": "https://www.parallels.cn",
    "category": "虚拟机"
  },
  {
    "id": "90",
    "title": "mumu Android模拟器",
    "description": "网易MuMu[手游模拟器][安卓模拟器]",
    "shortDesc": "网易MuMu[手游模拟器][安卓模拟器]。",
    "url": "http://mumu.163.com",
    "category": "虚拟机"
  },
  {
    "id": "91",
    "title": "DBeaver",
    "description": "适用于开发人员，数据库管理员，分析师和所有需要使用数据库的人员的免费的多平台数据库工具。支持所有流行的数据库：MySQL，PostgreSQL，SQLite，Oracle，DB2，SQL Server，Sybase，MS Access，Teradata，Firebird，Apache Hive，Phoenix，Presto等",
    "shortDesc": "适用于开发人员，数据库管理员，分析师和所有需要使用数据库的人员的免费的多平台数据库工具。支持所有流行的数据库：MySQL，PostgreSQL，SQLite，Oracle，DB2，SQL Server，Sybase，MS Access，Teradata，Firebird，Apache Hive，Phoenix，Presto等。",
    "url": "https://dbeaver.io",
    "category": "数据库"
  },
  {
    "id": "92",
    "title": "RedisDesktopManager",
    "description": "Redis Desktop Manager（又名RDM）—是用于Windows，Linux，MacOS和iPadOS的快速Redis数据库管理应用程序。",
    "shortDesc": "Redis Desktop Manager（又名RDM）—是用于Windows，Linux，MacOS和iPadOS的快速Redis数据库管理应用程序。",
    "url": "https://redisdesktop.com",
    "category": "数据库"
  },
  {
    "id": "93",
    "title": "Sequel Pro",
    "description": "Sequel Pro是一个快速，易于使用的Mac数据库管理应用程序，用于处理MySQL数据库。",
    "shortDesc": "Sequel Pro是一个快速，易于使用的Mac数据库管理应用程序，用于处理MySQL数据库。",
    "url": "https://www.sequelpro.com",
    "category": "数据库"
  },
  {
    "id": "94",
    "title": "Robo 3T",
    "description": "一个现代，强大且由社区驱动的MongoDB管理工具",
    "shortDesc": "一个现代，强大且由社区驱动的MongoDB管理工具。",
    "url": "https://robomongo.org",
    "category": "数据库"
  },
  {
    "id": "95",
    "title": "DataGrip",
    "description": "jetbrains出品的数据库管理系统",
    "shortDesc": "jetbrains出品的数据库管理系统。",
    "url": "https://www.jetbrains.com/datagrip",
    "category": "数据库"
  },
  {
    "id": "96",
    "title": "tableplus",
    "description": "用于关系数据库的现代，本地且友好的GUI工具：MySQL，PostgreSQL，SQLite等",
    "shortDesc": "用于关系数据库的现代，本地且友好的GUI工具：MySQL，PostgreSQL，SQLite等。",
    "url": "https://tableplus.com",
    "category": "数据库"
  },
  {
    "id": "97",
    "title": "TeamViewer",
    "description": "TeamViewer远程连接控制软件是一款随时随地连接到远程桌面电脑、移动设备及Iot,让远程连接过程更加的快速和安全,轻松实现对文件、网络及程序的实时支持或访问。",
    "shortDesc": "TeamViewer远程连接控制软件是一款随时随地连接到远程桌面电脑、移动设备及Iot,让远程连接过程更加的快速和安全,轻松实现对文件、网络及程序的实时支持或访问。",
    "url": "https://www.teamviewer.cn",
    "category": "远程控制"
  },
  {
    "id": "98",
    "title": "向日葵",
    "description": "向日葵远程控制软件是一款免费的集远程控制电脑手机、远程桌面连接、远程开机、远程管理、支持内网穿透的一体化远程控制管理工具软件",
    "shortDesc": "向日葵远程控制软件是一款免费的集远程控制电脑手机、远程桌面连接、远程开机、远程管理、支持内网穿透的一体化远程控制管理工具软件。",
    "url": "https://sunlogin.oray.com",
    "category": "远程控制"
  },
  {
    "id": "99",
    "title": "v2ray",
    "description": "用于构建代理绕过网络限制的平台。",
    "shortDesc": "用于构建代理绕过网络限制的平台。",
    "url": "https://github.com/v2ray/v2ray-core",
    "category": "飞机场"
  },
  {
    "id": "100",
    "title": "clash",
    "description": "Go中基于规则的隧道",
    "shortDesc": "Go中基于规则的隧道。",
    "url": "https://github.com/Dreamacro/clash",
    "category": "飞机场"
  },
  {
    "id": "101",
    "title": "哔哩哔哩",
    "description": "国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围，最有创意的Up主",
    "shortDesc": "国内知名的视频弹幕网站，这里有最及时的动漫新番，最棒的ACG氛围，最有创意的Up主。",
    "url": "https://www.bilibili.com",
    "category": "影视"
  },
  {
    "id": "102",
    "title": "爱奇艺",
    "description": "拥有海量、优质、高清的网络视频的大型视频网站，专业的网络视频播放平台",
    "shortDesc": "拥有海量、优质、高清的网络视频的大型视频网站，专业的网络视频播放平台。",
    "url": "https://www.iqiyi.com",
    "category": "影视"
  },
  {
    "id": "103",
    "title": "Youtube",
    "description": "全球最大的视频网站",
    "shortDesc": "全球最大的视频网站。",
    "url": "https://www.youtube.com",
    "category": "影视"
  },
  {
    "id": "104",
    "title": "斗鱼",
    "description": "斗鱼 - 每个人的直播平台",
    "shortDesc": "斗鱼 - 每个人的直播平台。",
    "url": "https://www.douyu.com",
    "category": "影视"
  },
  {
    "id": "108",
    "title": "kk电影",
    "description": "kk电影,最新电影在线看,最新电影下载,免费高清电影网",
    "shortDesc": "kk电影,最新电影在线看,最新电影下载,免费高清电影网。",
    "url": "http://www.kk3.tv",
    "category": "影视"
  },
  {
    "id": "109",
    "title": "自由的音乐",
    "description": "自由的音乐是一个免费试听并下载全网音乐的网站",
    "shortDesc": "自由的音乐是一个免费试听并下载全网音乐的网站。",
    "url": "https://www.tikitiki.cn",
    "category": "音乐"
  },
  {
    "id": "110",
    "title": "智联招聘",
    "description": "智联招聘，更懂你的价值",
    "shortDesc": "智联招聘，更懂你的价值。",
    "url": "https://www.zhaopin.com",
    "category": "招聘"
  },
  {
    "id": "111",
    "title": "前程无忧",
    "description": "招聘网,人才网,求职,找工作",
    "shortDesc": "招聘网,人才网,求职,找工作。",
    "url": "https://www.51job.com",
    "category": "招聘"
  },
  {
    "id": "112",
    "title": "BOSS直聘",
    "description": "BOSS直聘是权威领先的招聘网，开启人才网招聘求职新时代，让求职者与Boss直接开聊、加快面试、即时反馈，找工作就来BOSS直聘和Boss开聊吧",
    "shortDesc": "BOSS直聘是权威领先的招聘网，开启人才网招聘求职新时代，让求职者与Boss直接开聊、加快面试、即时反馈，找工作就来BOSS直聘和Boss开聊吧。",
    "url": "https://www.zhipin.com",
    "category": "招聘"
  },
  {
    "id": "113",
    "title": "ResumeSample",
    "description": "程序员简历模板系列, WEB/IOS/Android/C++/node等以及通用程序员简历模板",
    "shortDesc": "程序员简历模板系列, WEB/IOS/Android/C++/node等以及通用程序员简历模板。",
    "url": "https://github.com/geekcompany/ResumeSample",
    "category": "求职"
  },
  {
    "id": "114",
    "title": "程序员找工作黑名单",
    "description": "有些事情，应该被记住",
    "shortDesc": "有些事情，应该被记住。",
    "url": "http://coder.shengxinjing.cn",
    "category": "求职"
  },
  {
    "id": "115",
    "title": "看准网",
    "description": "看准网★中国领先的职场信息平台,专注于公司评论,晒工资,工资待遇,面试,公司福利等.您可以在看准网上匿名分享您的职业信息",
    "shortDesc": "看准网★中国领先的职场信息平台,专注于公司评论,晒工资,工资待遇,面试,公司福利等.您可以在看准网上匿名分享您的职业信息。",
    "url": "https://www.kanzhun.com",
    "category": "求职"
  },
  {
    "id": "116",
    "title": "TinyPNG",
    "description": "智能PNG和JPEG压缩，以质量和文件大小的完美平衡来优化您的图像",
    "shortDesc": "智能PNG和JPEG压缩，以质量和文件大小的完美平衡来优化您的图像。",
    "url": "https://tinypng.com",
    "category": "压缩工具"
  },
  {
    "id": "117",
    "title": "Squoosh",
    "description": "在浏览器中用不同的编解码器压缩和比较图像(Google出品)",
    "shortDesc": "在浏览器中用不同的编解码器压缩和比较图像(Google出品)。",
    "url": "https://squoosh.app",
    "category": "压缩工具"
  },
  {
    "id": "118",
    "title": "草料二维码",
    "description": "用专业的二维码产品帮助企业创造价值",
    "shortDesc": "用专业的二维码产品帮助企业创造价值。",
    "url": "https://cli.im/url",
    "category": "辅助工具"
  },
  {
    "id": "119",
    "title": "Feed 验证器",
    "description": "验证RSS是否符合标准规范",
    "shortDesc": "验证RSS是否符合标准规范。",
    "url": "http://www.feedvalidator.org",
    "category": "辅助工具"
  },
  {
    "id": "120",
    "title": "淘捏捏",
    "description": "淘宝信誉查询 - 淘捏捏卖家工具箱 淘宝信誉查询_淘宝信用查询_淘宝小号查询_淘宝黑号查询",
    "shortDesc": "淘宝信誉查询 - 淘捏捏卖家工具箱 淘宝信誉查询_淘宝信用查询_淘宝小号查询_淘宝黑号查询。",
    "url": "http://taonienie.com",
    "category": "辅助工具"
  },
  {
    "id": "121",
    "title": "天眼查",
    "description": "人人都在用商业安全工具_企业信息查询_公司查询_工商查询_企业信用信息查询系统",
    "shortDesc": "人人都在用商业安全工具_企业信息查询_公司查询_工商查询_企业信用信息查询系统。",
    "url": "https://www.tianyancha.com",
    "category": "辅助工具"
  },
  {
    "id": "122",
    "title": "语雀",
    "description": "优雅高效的在线文档编辑与协同工具，让每个企业轻松拥有文档中心 - 阿里巴巴",
    "shortDesc": "优雅高效的在线文档编辑与协同工具，让每个企业轻松拥有文档中心 - 阿里巴巴。",
    "url": "https://yuque.com",
    "category": "辅助工具"
  },
  {
    "id": "123",
    "title": "求是潮云U盘",
    "description": "临时文件上传, 快速和稳定",
    "shortDesc": "临时文件上传, 快速和稳定。",
    "url": "https://box.zjuqsc.com",
    "category": "辅助工具"
  },
  {
    "id": "124",
    "title": "云转换",
    "description": "在线免费转换视频,音频,YouTube视频到文字,视频到文字,音频到文字,语音转换成文字",
    "shortDesc": "在线免费转换视频,音频,YouTube视频到文字,视频到文字,音频到文字,语音转换成文字。",
    "url": "http://www.360converter.com",
    "category": "辅助工具"
  },
  {
    "id": "125",
    "title": "Picdiet",
    "description": "独特且强悍的JavaScript算法，能极速压缩80%的图片大小，而不损害其质量",
    "shortDesc": "独特且强悍的JavaScript算法，能极速压缩80%的图片大小，而不损害其质量。",
    "url": "https://www.picdiet.com/zh-cn",
    "category": "辅助工具"
  },
  {
    "id": "126",
    "title": "easyicon",
    "description": "在线图标转换ico、icns",
    "shortDesc": "在线图标转换ico、icns。",
    "url": "https://www.easyicon.net/covert",
    "category": "辅助工具"
  },
  {
    "id": "127",
    "title": "Smallpdf",
    "description": "压缩pdf、各种文件格式转换pdf",
    "shortDesc": "压缩pdf、各种文件格式转换pdf。",
    "url": "https://smallpdf.com",
    "category": "辅助工具"
  },
  {
    "id": "128",
    "title": "Cool Backgrounds",
    "description": "生成非常酷的彩色背景图像",
    "shortDesc": "生成非常酷的彩色背景图像。",
    "url": "https://coolbackgrounds.io",
    "category": "辅助工具"
  },
  {
    "id": "129",
    "title": "Unsplash Source",
    "description": "随机生成图片链接",
    "shortDesc": "随机生成图片链接。",
    "url": "https://source.unsplash.com",
    "category": "辅助工具"
  },
  {
    "id": "130",
    "title": "石墨文档",
    "description": "一款轻便、简洁的在线协作文档工具，PC端和移动端全覆盖，支持多人同时对文档编辑和评论...",
    "shortDesc": "一款轻便、简洁的在线协作文档工具，PC端和移动端全覆盖，支持多人同时对文档编辑和评论...。",
    "url": "https://shimo.im",
    "category": "辅助工具"
  },
  {
    "id": "131",
    "title": "Emoji searcher",
    "description": "Emoji表情大全",
    "shortDesc": "Emoji表情大全。",
    "url": "http://emoji.muan.co",
    "category": "辅助工具"
  },
  {
    "id": "132",
    "title": "imgURL",
    "description": "ImgURL是一个简单、纯粹的图床程序，让个人图床多一个选择",
    "shortDesc": "ImgURL是一个简单、纯粹的图床程序，让个人图床多一个选择。",
    "url": "https://imgurl.org",
    "category": "辅助工具"
  },
  {
    "id": "133",
    "title": "拷贝兔",
    "description": "跨平台分享工具，纯Web，IOS，MAC，Linux，Android互传",
    "shortDesc": "跨平台分享工具，纯Web，IOS，MAC，Linux，Android互传。",
    "url": "https://cp.ifval.com",
    "category": "辅助工具"
  },
  {
    "id": "134",
    "title": "表格工具",
    "description": "一个功能强大的在线表格编辑器，支持Excel、Markdown、JSON、CSV、HTML等格式的相互转换",
    "shortDesc": "一个功能强大的在线表格编辑器，支持Excel、Markdown、JSON、CSV、HTML等格式的相互转换。",
    "url": "https://tableconvert.com",
    "category": "辅助工具"
  },
  {
    "id": "135",
    "title": "360查字体",
    "description": "360查字体 - 查版权，免纠纷",
    "shortDesc": "360查字体 - 查版权，免纠纷。",
    "url": "https://fonts.safe.360.cn",
    "category": "辅助工具"
  },
  {
    "id": "136",
    "title": "sejda",
    "description": "在线HTML转换pdf",
    "shortDesc": "在线HTML转换pdf。",
    "url": "https://www.sejda.com/html-to-pdf",
    "category": "辅助工具"
  },
  {
    "id": "137",
    "title": "AI人工智能图片放大",
    "description": "Bigjpg - 使用开源waifu2x人工智能深度卷积神经网络（CNN）智能无损免费放大图片",
    "shortDesc": "Bigjpg - 使用开源waifu2x人工智能深度卷积神经网络（CNN）智能无损免费放大图片。",
    "url": "https://bigjpg.com",
    "category": "辅助工具"
  },
  {
    "id": "138",
    "title": "VVV文档在线导出工具",
    "description": "免费下载百度文库文档",
    "shortDesc": "免费下载百度文库文档。",
    "url": "http://wenku.baiduvvv.com/doc",
    "category": "辅助工具"
  },
  {
    "id": "139",
    "title": "在线文件编码识别",
    "description": "在线文件编码识别",
    "shortDesc": "在线文件编码识别。",
    "url": "http://tools.bugscaner.com/filebianma",
    "category": "辅助工具"
  },
  {
    "id": "140",
    "title": "iptv",
    "description": "收集来自世界各地的5000多个公共IPTV频道",
    "shortDesc": "收集来自世界各地的5000多个公共IPTV频道。",
    "url": "https://github.com/iptv-org/iptv",
    "category": "辅助工具"
  },
  {
    "id": "141",
    "title": "临时邮箱",
    "description": "10分钟邮箱，临时邮箱，临时邮，临时电子邮箱，24小时邮箱，一次性邮箱，匿名邮箱，安全邮箱",
    "shortDesc": "10分钟邮箱，临时邮箱，临时邮，临时电子邮箱，24小时邮箱，一次性邮箱，匿名邮箱，安全邮箱。",
    "url": "https://www.linshiyouxiang.net",
    "category": "辅助工具"
  },
  {
    "id": "142",
    "title": "jQuery",
    "description": "jQuery是一个JavaScript函数库",
    "shortDesc": "jQuery是一个JavaScript函数库。",
    "url": "http://jquery.com",
    "category": "JavaScript"
  },
  {
    "id": "143",
    "title": "webpack",
    "description": "webpack是一个模块打包器",
    "shortDesc": "webpack是一个模块打包器。",
    "url": "https://www.webpackjs.com",
    "category": "JavaScript"
  },
  {
    "id": "144",
    "title": "Babel",
    "description": "用于编写下一代 JavaScript 的编译器",
    "shortDesc": "用于编写下一代 JavaScript 的编译器。",
    "url": "http://babeljs.io",
    "category": "JavaScript"
  },
  {
    "id": "145",
    "title": "ESLint",
    "description": "可组装的JavaScript和JSX检查工具",
    "shortDesc": "可组装的JavaScript和JSX检查工具。",
    "url": "https://cn.eslint.org",
    "category": "JavaScript"
  },
  {
    "id": "146",
    "title": "stylelint",
    "description": "一个强大的现代样式风格的linter",
    "shortDesc": "一个强大的现代样式风格的linter。",
    "url": "https://stylelint.io",
    "category": "JavaScript"
  },
  {
    "id": "147",
    "title": "Mocha",
    "description": "Mocha是JavaScript的一种单元测试框架，既可以在浏览器环境下运行，也可以在Node.js环境下运行",
    "shortDesc": "Mocha是JavaScript的一种单元测试框架，既可以在浏览器环境下运行，也可以在Node.js环境下运行。",
    "url": "https://mochajs.org",
    "category": "JavaScript"
  },
  {
    "id": "148",
    "title": "MUI",
    "description": "MUI: 最接近原生APP体验的高性能前端框架",
    "shortDesc": "MUI: 最接近原生APP体验的高性能前端框架。",
    "url": "http://dev.dcloud.net.cn/mui",
    "category": "JavaScript"
  },
  {
    "id": "149",
    "title": "rollup",
    "description": "Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序",
    "shortDesc": "Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码，例如 library 或应用程序。",
    "url": "https://rollupjs.org/guide/zh",
    "category": "JavaScript"
  },
  {
    "id": "150",
    "title": "standard",
    "description": "JavaScript样式指南，带有linter和自动代码修复程序",
    "shortDesc": "JavaScript样式指南，带有linter和自动代码修复程序。",
    "url": "https://standardjs.com",
    "category": "JavaScript"
  },
  {
    "id": "151",
    "title": "Faker",
    "description": "在Node.js和浏览器中生成大量逼真的假数据",
    "shortDesc": "在Node.js和浏览器中生成大量逼真的假数据。",
    "url": "https://github.com/Marak/faker.js",
    "category": "JavaScript"
  },
  {
    "id": "152",
    "title": "sweetalert",
    "description": "JavaScript Alert 的漂亮替代品",
    "shortDesc": "JavaScript Alert 的漂亮替代品。",
    "url": "https://sweetalert.js.org",
    "category": "JavaScript"
  },
  {
    "id": "153",
    "title": "Sortable",
    "description": "一个JavaScript库，用于在现代浏览器和触摸设备上对拖放列表进行重新排序",
    "shortDesc": "一个JavaScript库，用于在现代浏览器和触摸设备上对拖放列表进行重新排序。",
    "url": "https://sortablejs.github.io/Sortable",
    "category": "JavaScript"
  },
  {
    "id": "154",
    "title": "formilyjs",
    "description": "Formily 是一个由阿里巴巴集团多 BU 共建的面向中后台复杂场景的表单解决方案，它也是一个表单框架",
    "shortDesc": "Formily 是一个由阿里巴巴集团多 BU 共建的面向中后台复杂场景的表单解决方案，它也是一个表单框架。",
    "url": "https://formilyjs.org",
    "category": "JavaScript"
  },
  {
    "id": "155",
    "title": "rough-notation",
    "description": "一个小的JavaScript库，用于在网页上创建手绘动画并为其添加动画效果",
    "shortDesc": "一个小的JavaScript库，用于在网页上创建手绘动画并为其添加动画效果。",
    "url": "https://roughnotation.com",
    "category": "JavaScript"
  },
  {
    "id": "156",
    "title": "AntV",
    "description": "AntV 是蚂蚁金服全新一代数据可视化解决方案",
    "shortDesc": "AntV 是蚂蚁金服全新一代数据可视化解决方案。",
    "url": "https://antv.alipay.com",
    "category": "JavaScript"
  },
  {
    "id": "157",
    "title": "Lodash",
    "description": "Lodash是一个一致性、模块化、高性能的 JavaScript 实用工具库",
    "shortDesc": "Lodash是一个一致性、模块化、高性能的 JavaScript 实用工具库。",
    "url": "https://www.lodashjs.com",
    "category": "JavaScript"
  },
  {
    "id": "158",
    "title": "Swiper",
    "description": "轻量级的移动设备触控滑块的js框架，使用硬件加速过渡",
    "shortDesc": "轻量级的移动设备触控滑块的js框架，使用硬件加速过渡。",
    "url": "https://www.swiper.com.cn",
    "category": "JavaScript"
  },
  {
    "id": "159",
    "title": "fastclick",
    "description": "Polyfill 解决移动端具有300ms延迟的库",
    "shortDesc": "Polyfill 解决移动端具有300ms延迟的库。",
    "url": "https://github.com/ftlabs/fastclick",
    "category": "JavaScript"
  },
  {
    "id": "160",
    "title": "Layer",
    "description": "丰富多样的Web弹出层组件,可轻松实现Alert/Confirm/Prompt/普通提示/页面区块/iframe/tips等等几乎所有的弹出交互",
    "shortDesc": "丰富多样的Web弹出层组件,可轻松实现Alert/Confirm/Prompt/普通提示/页面区块/iframe/tips等等几乎所有的弹出交互。",
    "url": "http://layer.layui.com",
    "category": "JavaScript"
  },
  {
    "id": "161",
    "title": "moment.js",
    "description": "一个轻量级的JavaScript日期库，用于解析，验证，操作和格式化日期",
    "shortDesc": "一个轻量级的JavaScript日期库，用于解析，验证，操作和格式化日期。",
    "url": "http://momentjs.cn",
    "category": "JavaScript"
  },
  {
    "id": "162",
    "title": "js-cookie",
    "description": "一个简单，轻量级的JavaScript API，用于处理浏览器cookie",
    "shortDesc": "一个简单，轻量级的JavaScript API，用于处理浏览器cookie。",
    "url": "https://github.com/js-cookie/js-cookie",
    "category": "JavaScript"
  },
  {
    "id": "163",
    "title": "qs",
    "description": "具有嵌套支持的查询字符串解析器",
    "shortDesc": "具有嵌套支持的查询字符串解析器。",
    "url": "https://github.com/ljharb/qs",
    "category": "JavaScript"
  },
  {
    "id": "164",
    "title": "Mock.js",
    "description": "生成随机数据，拦截 Ajax 请求",
    "shortDesc": "生成随机数据，拦截 Ajax 请求。",
    "url": "http://mockjs.com",
    "category": "JavaScript"
  },
  {
    "id": "165",
    "title": "GITALK",
    "description": "凹凸实验室出品的一款基于 Github Issue 和 Preact 开发的评论插件",
    "shortDesc": "凹凸实验室出品的一款基于 Github Issue 和 Preact 开发的评论插件。",
    "url": "https://gitalk.github.io",
    "category": "JavaScript"
  },
  {
    "id": "166",
    "title": "prism",
    "description": "轻巧，强大，优雅的代码语法高亮",
    "shortDesc": "轻巧，强大，优雅的代码语法高亮。",
    "url": "https://prismjs.com",
    "category": "JavaScript"
  },
  {
    "id": "167",
    "title": "nprogress",
    "description": "顶部加载进度条",
    "shortDesc": "顶部加载进度条。",
    "url": "http://ricostacruz.com/nprogress",
    "category": "JavaScript"
  },
  {
    "id": "168",
    "title": "iNotify",
    "description": "JS实现浏览器标题闪烁，滚动，语音提示，Chrome/Safari/FireFox/IE通知",
    "shortDesc": "JS实现浏览器标题闪烁，滚动，语音提示，Chrome/Safari/FireFox/IE通知。",
    "url": "https://git.io/iNotify",
    "category": "JavaScript"
  },
  {
    "id": "169",
    "title": "html2canvas",
    "description": "最流行的JavaScript屏幕截图",
    "shortDesc": "最流行的JavaScript屏幕截图。",
    "url": "https://html2canvas.hertzen.com",
    "category": "JavaScript"
  },
  {
    "id": "170",
    "title": "dayjs",
    "description": "使用与Moment.js兼容的API来解析，验证，操作和显示现代浏览器的日期和时间",
    "shortDesc": "使用与Moment.js兼容的API来解析，验证，操作和显示现代浏览器的日期和时间。",
    "url": "https://github.com/iamkun/dayjs/blob/master/docs/zh-cn/API-reference.md",
    "category": "JavaScript"
  },
  {
    "id": "171",
    "title": "JsBarcode",
    "description": "易于使用但功能强大的条形码生成器，适用于Web和Node.js",
    "shortDesc": "易于使用但功能强大的条形码生成器，适用于Web和Node.js。",
    "url": "https://lindell.me/JsBarcode",
    "category": "JavaScript"
  },
  {
    "id": "172",
    "title": "clipboard.js",
    "description": "现代复制到剪贴板。没有Flash。只需3kb gzipped。",
    "shortDesc": "现代复制到剪贴板。没有Flash。只需3kb gzipped。",
    "url": "https://clipboardjs.com",
    "category": "JavaScript"
  },
  {
    "id": "173",
    "title": "lib-flexible",
    "description": "可伸缩布局方案, 淘宝rem解决方案",
    "shortDesc": "可伸缩布局方案, 淘宝rem解决方案。",
    "url": "https://github.com/amfe/lib-flexible",
    "category": "JavaScript"
  },
  {
    "id": "174",
    "title": "js-xss",
    "description": "根据白名单过滤HTML(防止XSS攻击)",
    "shortDesc": "根据白名单过滤HTML(防止XSS攻击)。",
    "url": "https://github.com/leizongmin/js-xss",
    "category": "JavaScript"
  },
  {
    "id": "175",
    "title": "mescroll",
    "description": "精致的下拉刷新和上拉加载 js框架.支持vue,完美运行于移动端和主流PC浏览器",
    "shortDesc": "精致的下拉刷新和上拉加载 js框架.支持vue,完美运行于移动端和主流PC浏览器。",
    "url": "http://www.mescroll.com/index.html",
    "category": "JavaScript"
  },
  {
    "id": "176",
    "title": "better-scroll",
    "description": "灵感来自iscroll，它具有更好的滚动性能",
    "shortDesc": "灵感来自iscroll，它具有更好的滚动性能。",
    "url": "https://ustbhuangyi.github.io/better-scroll",
    "category": "JavaScript"
  },
  {
    "id": "177",
    "title": "pinyinjs",
    "description": "一个实现汉字与拼音互转的小巧web工具库",
    "shortDesc": "一个实现汉字与拼音互转的小巧web工具库。",
    "url": "http://demo.haoji.me/pinyinjs",
    "category": "JavaScript"
  },
  {
    "id": "178",
    "title": "ms",
    "description": "使用此包可以轻松地将各种时间格式转换为毫秒。",
    "shortDesc": "使用此包可以轻松地将各种时间格式转换为毫秒。",
    "url": "https://github.com/zeit/ms",
    "category": "JavaScript"
  },
  {
    "id": "179",
    "title": "ramda",
    "description": "适用于JavaScript程序员的实用函数库",
    "shortDesc": "适用于JavaScript程序员的实用函数库。",
    "url": "https://ramdajs.com",
    "category": "JavaScript"
  },
  {
    "id": "180",
    "title": "decimal.js",
    "description": "JavaScript的任意精度Decimal类型 (0.1+0.2=0.3)",
    "shortDesc": "JavaScript的任意精度Decimal类型 (0.1+0.2=0.3)。",
    "url": "http://mikemcl.github.io/decimal.js",
    "category": "JavaScript"
  },
  {
    "id": "181",
    "title": "copy-to-clipboard",
    "description": "简单的模块公开copy功能，它将尝试使用execCommand与特定于IE的clipboardData接口的回退，最后，通常prompt使用适当的文本内容和消息",
    "shortDesc": "简单的模块公开copy功能，它将尝试使用execCommand与特定于IE的clipboardData接口的回退，最后，通常prompt使用适当的文本内容和消息。",
    "url": "https://github.com/sudodoki/copy-to-clipboard",
    "category": "JavaScript"
  },
  {
    "id": "182",
    "title": "path-to-regexp",
    "description": "将字符串路径转换成正则表达式",
    "shortDesc": "将字符串路径转换成正则表达式。",
    "url": "https://github.com/pillarjs/path-to-regexp",
    "category": "JavaScript"
  }，
{
  "links": [
    {
      "id": "279",
      "title": "react-virtualized",
      "description": "React组件可有效呈现大型列表和表格数据",
      "shortDesc": "React组件可有效呈现大型列表和表格数据",
      "url": "http://www.reactvirtualized.com",
      "category": "React"
    },
    {
      "id": "280",
      "title": "react-live",
      "description": "一个用于实时编辑React组件的灵活组件库",
      "shortDesc": "一个用于实时编辑React组件的灵活组件库",
      "url": "https://react-live.netlify.com",
      "category": "React"
    },
    {
      "id": "281",
      "title": "formik",
      "description": "在React中轻松创建表单",
      "shortDesc": "在React中轻松创建表单",
      "url": "https://jaredpalmer.com/formik/docs/overview",
      "category": "React"
    },
    {
      "id": "282",
      "title": "react-move",
      "description": "一个React组件，它创建可移动，可拖动，可调整大小，可缩放，可旋转，可扭曲，可收缩，可分组，可捕捉。",
      "shortDesc": "一个React组件，它创建可移动，可拖动，可调整大小，可缩放，可旋转，可扭曲，可收缩，可分组，可捕捉。",
      "url": "https://github.com/daybrush/moveable/tree/master/packages/react-moveable",
      "category": "React"
    },
    {
      "id": "283",
      "title": "react-dnd",
      "description": "React DnD是一组React实用程序，可帮助您构建复杂的拖放接口，同时保持组件分离",
      "shortDesc": "React DnD是一组React实用程序，可帮助您构建复杂的拖放接口，同时保持组件分离",
      "url": "https://react-dnd.github.io/react-dnd/about",
      "category": "React"
    },
    {
      "id": "298",
      "title": "nwb",
      "description": "适用于Web的React，Preact，Inferno和Vanilla JS应用，React库和其他npm模块的工具包，无需配置",
      "shortDesc": "适用于Web的React，Preact，Inferno和Vanilla JS应用，React库和其他npm模块的工具包，无需配置",
      "url": "https://github.com/insin/nwb",
      "category": "React"
    },
    {
      "id": "299",
      "title": "ahooks",
      "description": "为 React Hooks 而生",
      "shortDesc": "为 React Hooks 而生",
      "url": "https://ahooks.js.org/zh-CN",
      "category": "React"
    },
    {
      "id": "300",
      "title": "react-app-rewired",
      "description": "覆盖create-react-app webpack配置而不弹出",
      "shortDesc": "覆盖create-react-app webpack配置而不弹出",
      "url": "https://github.com/timarney/react-app-rewired",
      "category": "React"
    },
    {
      "id": "301",
      "title": "Vue.js",
      "description": "渐进式JavaScript 框架",
      "shortDesc": "渐进式JavaScript 框架",
      "url": "https://cn.vuejs.org",
      "category": "Vue.js"
    },
    {
      "id": "302",
      "title": "Vue Router",
      "description": "Vue Router 是 Vue.js 官方的路由管理器",
      "shortDesc": "Vue Router 是 Vue.js 官方的路由管理器",
      "url": "https://router.vuejs.org/zh",
      "category": "Vue.js"
    },
    {
      "id": "303",
      "title": "Vuex",
      "description": "Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。",
      "shortDesc": "Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。",
      "url": "https://vuex.vuejs.org/zh",
      "category": "Vue.js"
    },
    {
      "id": "304",
      "title": "vue-devtools",
      "description": "vue.js调试工具",
      "shortDesc": "vue.js调试工具",
      "url": "https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd",
      "category": "Vue.js"
    },
    {
      "id": "305",
      "title": "vue-cli",
      "description": "Vue.js开发的标准脚手架工具",
      "shortDesc": "Vue.js开发的标准脚手架工具",
      "url": "https://cli.vuejs.org/zh",
      "category": "Vue.js"
    },
    {
      "id": "306",
      "title": "vuepress",
      "description": "Vue 驱动的静态网站生成器",
      "shortDesc": "Vue 驱动的静态网站生成器",
      "url": "https://vuepress.vuejs.org/zh",
      "category": "Vue.js"
    },
    {
      "id": "316",
      "title": "Ant Design Vue",
      "description": "这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
      "shortDesc": "这里是 Ant Design 的 Vue 实现，开发和服务于企业级后台产品",
      "url": "https://antdv.com/docs/vue/introduce-cn",
      "category": "Vue.js"
    },
    {
      "id": "317",
      "title": "vuetify",
      "description": "让Vue和Material Design的强大力量在开发上助您一臂之力",
      "shortDesc": "让Vue和Material Design的强大力量在开发上助您一臂之力",
      "url": "https://vuetifyjs.com/zh-Hans",
      "category": "Vue.js"
    },
    {
      "id": "318",
      "title": "bootstrap-vue",
      "description": "BootstrapVue为Vue.js提供了最全面的Bootstrap 4组件和网格系统实现之一，并提供了广泛的自动WAI-ARIA可访问性标记",
      "shortDesc": "BootstrapVue为Vue.js提供了最全面的Bootstrap 4组件和网格系统实现之一，并提供了广泛的自动WAI-ARIA可访问性标记",
      "url": "https://bootstrap-vue.js.org",
      "category": "Vue.js"
    },
    {
      "id": "319",
      "title": "vue-material",
      "description": "Vue material简单，轻巧，完全符合Google Material Design规范",
      "shortDesc": "Vue material简单，轻巧，完全符合Google Material Design规范",
      "url": "https://vuematerial.io",
      "category": "Vue.js"
    },
    {
      "id": "320",
      "title": "buefy",
      "description": "Buefy是一个基于Bulma框架和设计的Vue.js响应式UI组件的轻量级库。",
      "shortDesc": "Buefy是一个基于Bulma框架和设计的Vue.js响应式UI组件的轻量级库。",
      "url": "https://buefy.org",
      "category": "Vue.js"
    },
    {
      "id": "321",
      "title": "vant",
      "description": "轻量、可靠的移动端 Vue 组件库",
      "shortDesc": "轻量、可靠的移动端 Vue 组件库",
      "url": "https://youzan.github.io/vant/#/zh-CN/intro",
      "category": "Vue.js"
    },
    {
      "id": "322",
      "title": "vux",
      "description": "一个凑合的 Vue.js 移动端 UI 组件库",
      "shortDesc": "一个凑合的 Vue.js 移动端 UI 组件库",
      "url": "https://vux.li",
      "category": "Vue.js"
    },
    {
      "id": "334",
      "title": "Angular",
      "description": "Angular 是一个用于构建 Web 应用程序的平台和框架",
      "shortDesc": "Angular 是一个用于构建 Web 应用程序的平台和框架",
      "url": "https://www.angular.cn",
      "category": "Angular"
    },
    {
      "id": "335",
      "title": "angular-cli",
      "description": "用于Angular CLI脚手架工具",
      "shortDesc": "用于Angular CLI脚手架工具",
      "url": "https://cli.angular.io",
      "category": "Angular"
    },
    {
      "id": "336",
      "title": "augury",
      "description": "Angular调试和可视化工具",
      "shortDesc": "Angular调试和可视化工具",
      "url": "https://augury.angular.io",
      "category": "Angular"
    },
    {
      "id": "337",
      "title": "NG-ZORRO",
      "description": "基于Ant Design的Angular企业级UI组件",
      "shortDesc": "基于Ant Design的Angular企业级UI组件",
      "url": "http://ng.ant.design/docs/introduce/zh",
      "category": "Angular"
    },
    {
      "id": "338",
      "title": "ng-bootstrap",
      "description": "基于Bootstrap 4的Angular组件",
      "shortDesc": "基于Bootstrap 4的Angular组件",
      "url": "https://ng-bootstrap.github.io/#/components/accordion/examples",
      "category": "Angular"
    },
    {
      "id": "339",
      "title": "element-angular",
      "description": "Element Angular组件库",
      "shortDesc": "Element Angular组件库",
      "url": "https://element-angular.faas.ele.me/guide/install",
      "category": "Angular"
    },
    {
      "id": "340",
      "title": "primeng",
      "description": "PrimeNG是Angular的丰富UI组件的集合",
      "shortDesc": "PrimeNG是Angular的丰富UI组件的集合",
      "url": "https://www.primefaces.org/primeng/#/button",
      "category": "Angular"
    },
    {
      "id": "356",
      "title": "ColorUI",
      "description": "鲜亮的高饱和色彩，专注视觉的小程序组件库",
      "shortDesc": "鲜亮的高饱和色彩，专注视觉的小程序组件库",
      "url": "https://www.color-ui.com",
      "category": "微信开发"
    },
    {
      "id": "357",
      "title": "weapp-input-frame",
      "description": "验证码、支付密码输入框组件",
      "shortDesc": "验证码、支付密码输入框组件",
      "url": "https://github.com/xjh22222228/weapp-input-frame",
      "category": "微信开发"
    },
    {
      "id": "358",
      "title": "JS接口签名校验工具",
      "description": "微信 JS 接口签名校验工具",
      "shortDesc": "微信 JS 接口签名校验工具",
      "url": "https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=jsapisign",
      "category": "微信开发"
    },
    {
      "id": "359",
      "title": "接口调试工具",
      "description": "微信公众平台接口调试工具",
      "shortDesc": "微信公众平台接口调试工具",
      "url": "https://mp.weixin.qq.com/debug",
      "category": "微信开发"
    },
    {
      "id": "360",
      "title": "computed",
      "description": "小程序自定义组件 computed / watch 扩展",
      "shortDesc": "小程序自定义组件 computed / watch 扩展",
      "url": "https://github.com/wechat-miniprogram/computed",
      "category": "微信开发"
    },
    {
      "id": "361",
      "title": "awesome-github-wechat-weapp",
      "description": "微信小程序开源项目库汇总",
      "shortDesc": "微信小程序开源项目库汇总",
      "url": "https://github.com/opendigg/awesome-github-wechat-weapp",
      "category": "微信开发"
    },
    {
      "id": "362",
      "title": "awesome-wechat-weapp",
      "description": "微信小程序开发资源汇总",
      "shortDesc": "微信小程序开发资源汇总",
      "url": "https://github.com/justjavac/awesome-wechat-weapp",
      "category": "微信开发"
    },
    {
      "id": "363",
      "title": "微信开放社区",
      "description": "小程序开发者专区，微信公众平台,微信开放社区,开发者专区",
      "shortDesc": "小程序开发者专区，微信公众平台,微信开放社区,开发者专区",
      "url": "https://developers.weixin.qq.com",
      "category": "微信开发"
    },
    {
      "id": "364",
      "title": "wechat-format",
      "description": "微信公众号排版编辑器，转换 Markdown 到微信特制的 HTML",
      "shortDesc": "微信公众号排版编辑器，转换 Markdown 到微信特制的 HTML",
      "url": "https://lab.lyric.im/wxformat",
      "category": "微信开发"
    },
    {
      "id": "365",
      "title": "微信开放平台",
      "description": "微信开放平台",
      "shortDesc": "微信开放平台",
      "url": "https://open.weixin.qq.com",
      "category": "微信开发"
    },
    {
      "id": "366",
      "title": "CSS3 UI Lib",
      "description": "CSS动画集成、在线调试阴影",
      "shortDesc": "CSS动画集成、在线调试阴影",
      "url": "http://css3lib.alloyteam.com/#panel/demo1",
      "category": "工具"
    },
    {
      "id": "367",
      "title": "CSS Sprites Generator",
      "description": "CSS雪碧图生成",
      "shortDesc": "CSS雪碧图生成",
      "url": "https://www.toptal.com/developers/css/sprite-generator",
      "category": "工具"
    },
    {
      "id": "368",
      "title": "CSS渐变调试器",
      "description": "前端开发调试CSS渐变必备神器",
      "shortDesc": "前端开发调试CSS渐变必备神器",
      "url": "http://www.colorzilla.com/gradient-editor",
      "category": "工具"
    },
    {
      "id": "369",
      "title": "Animista",
      "description": "在线生成CSS动画",
      "shortDesc": "在线生成CSS动画",
      "url": "http://animista.net/play/background/ken-burns",
      "category": "工具"
    },
    {
      "id": "370",
      "title": "CSS Gradient",
      "description": "CSS渐变调试并生成CSS代码",
      "shortDesc": "CSS渐变调试并生成CSS代码",
      "url": "https://cssgradient.io",
      "category": "工具"
    },
    {
      "id": "371",
      "title": "Grabient",
      "description": "CSS渐变调试并生成CSS代码，还可以角度变换",
      "shortDesc": "CSS渐变调试并生成CSS代码，还可以角度变换",
      "url": "https://www.grabient.com",
      "category": "工具"
    },
    {
      "id": "397",
      "title": "HTML Reference",
      "description": "所有HTML元素和属性的免费指南参考",
      "shortDesc": "所有HTML元素和属性的免费指南参考",
      "url": "https://htmlreference.io",
      "category": "工具"
    },
    {
      "id": "398",
      "title": "jsbin",
      "description": "一个轻量级的html/css/js在线编辑器Debug调试器",
      "shortDesc": "一个轻量级的html/css/js在线编辑器Debug调试器",
      "url": "https://jsbin.com/juduyibeku/edit?html,css,js,console,output",
      "category": "工具"
    },
    {
      "id": "399",
      "title": "jsfuck",
      "description": "JSFuck是基于JavaScript原子部分的深奥和教育性编程风格。它仅使用六个不同的字符来编写和执行代码。",
      "shortDesc": "JSFuck是基于JavaScript原子部分的深奥和教育性编程风格。它仅使用六个不同的字符来编写和执行代码。",
      "url": "http://www.jsfuck.com",
      "category": "工具"
    },
    {
      "id": "400",
      "title": "Bootstrap",
      "description": "Bootstrap 是一个用于快速开发 Web 应用程序和网站的前端框架",
      "shortDesc": "Bootstrap 是一个用于快速开发 Web 应用程序和网站的前端框架",
      "url": "http://getbootstrap.com",
      "category": "CSS"
    },
    {
      "id": "401",
      "title": "Sass",
      "description": "Sass 是成熟、稳定、强大的 CSS 扩展语言",
      "shortDesc": "Sass 是成熟、稳定、强大的 CSS 扩展语言",
      "url": "http://sass-lang.com",
      "category": "CSS"
    },
    {
      "id": "402",
      "title": "Less",
      "description": "Less 是一门 CSS 预处理语言,它扩展了 CSS 语言,增加了变量、Mixin、函数等特性",
      "shortDesc": "Less 是一门 CSS 预处理语言,它扩展了 CSS 语言,增加了变量、Mixin、函数等特性",
      "url": "http://lesscss.org",
      "category": "CSS"
    },
    {
      "id": "403",
      "title": "magic",
      "description": "CSS3动画特效",
      "shortDesc": "CSS3动画特效",
      "url": "https://minimamente.com/example/magic_animations",
      "category": "CSS"
    },
    {
      "id": "404",
      "title": "Animate.css",
      "description": "CSS动画的跨浏览器库,简单易用",
      "shortDesc": "CSS动画的跨浏览器库,简单易用",
      "url": "https://daneden.github.io/animate.css",
      "category": "CSS"
    },
    {
      "id": "405",
      "title": "normalize.css",
      "description": "使浏览器更加一致地呈现所有元素并符合现代标准。它只针对需要规范化的样式",
      "shortDesc": "使浏览器更加一致地呈现所有元素并符合现代标准。它只针对需要规范化的样式",
      "url": "http://necolas.github.io/normalize.css",
      "category": "CSS"
    },
    {
      "id": "422",
      "title": "awesome-typescript",
      "description": "用于客户端和服务器端开发的强大TypeScript资源的集合。在TypeScript中编写精彩的JavaScript",
      "shortDesc": "用于客户端和服务器端开发的强大TypeScript资源的集合。在TypeScript中编写精彩的JavaScript",
      "url": "https://github.com/dzharii/awesome-typescript",
      "category": "TypeScript"
    },
    {
      "id": "423",
      "title": "TypeScript 入门教程",
      "description": "TypeScript 入门教程",
      "shortDesc": "TypeScript 入门教程",
      "url": "https://ts.xcatliu.com",
      "category": "TypeScript"
    },
    {
      "id": "424",
      "title": "JavaScript 20 年",
      "description": "JavaScript 20 年",
      "shortDesc": "JavaScript 20 年",
      "url": "https://cn.history.js.org",
      "category": "参考资料"
    },
    {
      "id": "425",
      "title": "你不知道的JavaScript",
      "description": "你不知道的JavaScript",
      "shortDesc": "你不知道的JavaScript",
      "url": "https://github.com/getify/You-Dont-Know-JS",
      "category": "参考资料"
    },
    {
      "id": "426",
      "title": "现代 JavaScript 教程",
      "description": "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识",
      "shortDesc": "以最新的 JavaScript 标准为基准。通过简单但足够详细的内容，为你讲解从基础到高阶的 JavaScript 相关知识",
      "url": "https://zh.javascript.info",
      "category": "参考资料"
    },
    {
      "id": "427",
      "title": "ECMAScript 6入门",
      "description": "ECMAScript 6入门",
      "shortDesc": "ECMAScript 6入门",
      "url": "http://es6.ruanyifeng.com/#README",
      "category": "参考资料"
    },
    {
      "id": "428",
      "title": "JavaScript教程",
      "description": "JavaScript 标准参考教程",
      "shortDesc": "JavaScript 标准参考教程",
      "url": "https://wangdoc.com/javascript/basic/index.html",
      "category": "参考资料"
    },
    {
      "id": "183",
      "title": "autosize",
      "description": "autosize是一个小的独立脚本，可以自动调整textarea域的高度以适合文本",
      "shortDesc": "autosize是一个小的独立脚本，可以自动调整textarea域的高度以适合文本",
      "url": "http://www.jacklmoore.com/autosize",
      "category": "JavaScript"
    },
    {
      "id": "184",
      "title": "shake.js",
      "description": "监听手机设备摇动",
      "shortDesc": "监听手机设备摇动",
      "url": "https://github.com/alexgibson/shake.js",
      "category": "JavaScript"
    },
    {
      "id": "185",
      "title": "progressbar",
      "description": "可以轻松地为Web创建响应式和时尚的进度栏。动画即使在移动设备上也表现良好",
      "shortDesc": "可以轻松地为Web创建响应式和时尚的进度栏。动画即使在移动设备上也表现良好",
      "url": "https://kimmobrunfeldt.github.io/progressbar.js",
      "category": "JavaScript"
    },
    {
      "id": "186",
      "title": "easy-mock",
      "description": "Easy Mock 是一个可视化，并且能快速生成模拟数据的持久化服务",
      "shortDesc": "Easy Mock 是一个可视化，并且能快速生成模拟数据的持久化服务",
      "url": "https://easy-mock.com",
      "category": "JavaScript"
    },
    {
      "id": "187",
      "title": "Clamp.js",
      "description": "JS版本的多行文本溢出省略",
      "shortDesc": "JS版本的多行文本溢出省略",
      "url": "https://joe.sh/clamp-js",
      "category": "JavaScript"
    },
    {
      "id": "206",
      "title": "JavaScript-MD5",
      "description": "JavaScript-MD5",
      "shortDesc": "JavaScript-MD5",
      "url": "https://blueimp.github.io/JavaScript-MD5",
      "category": "JavaScript"
    },
    {
      "id": "207",
      "title": "js-sha1",
      "description": "JavaScript的简单SHA1哈希函数支持UTF-8编码。",
      "shortDesc": "JavaScript的简单SHA1哈希函数支持UTF-8编码。",
      "url": "https://github.com/emn178/js-sha1",
      "category": "JavaScript"
    },
    {
      "id": "208",
      "title": "js-base64",
      "description": "JavaScript的Base64实现",
      "shortDesc": "JavaScript的Base64实现",
      "url": "https://github.com/dankogai/js-base64",
      "category": "JavaScript"
    },
    {
      "id": "209",
      "title": "jsSHA",
      "description": "SHA-1，SHA-224，SHA3-224，SHA-256，SHA3-256，SHA-384，SHA3-384，SHA-512，SHA3-512，SHAKE128 ，和SHAKE256以及HMAC",
      "shortDesc": "SHA-1，SHA-224，SHA3-224，SHA-256，SHA3-256，SHA-384，SHA3-384，SHA-512，SHA3-512，SHAKE128 ，和SHAKE256以及HMAC",
      "url": "https://caligatio.github.io/jsSHA",
      "category": "JavaScript"
    },
    {
      "id": "210",
      "title": "crypto-js",
      "description": "加密标准的JavaScript库",
      "shortDesc": "加密标准的JavaScript库",
      "url": "https://cryptojs.gitbook.io",
      "category": "JavaScript"
    },
    {
      "id": "211",
      "title": "pdf.js",
      "description": "PDF.js是一个使用HTML5构建的可移植文档格式（PDF）查看器",
      "shortDesc": "PDF.js是一个使用HTML5构建的可移植文档格式（PDF）查看器",
      "url": "https://mozilla.github.io/pdf.js/web/viewer.html",
      "category": "JavaScript"
    },
    {
      "id": "212",
      "title": "webuploader",
      "description": "百度出品，采用大文件分片并发上传，极大的提高了文件上传效率。",
      "shortDesc": "百度出品，采用大文件分片并发上传，极大的提高了文件上传效率。",
      "url": "http://fex.baidu.com/webuploader",
      "category": "JavaScript"
    },
    {
      "id": "213",
      "title": "pdfmake",
      "description": "纯JavaScript中的客户端/服务器端PDF打印, HTML转换Pdf",
      "shortDesc": "纯JavaScript中的客户端/服务器端PDF打印, HTML转换Pdf",
      "url": "http://pdfmake.org",
      "category": "JavaScript"
    },
    {
      "id": "214",
      "title": "ViewerJS",
      "description": "JavaScript中的文档阅读器, pdf/ppt/opt/odt等文件渲染成HTML",
      "shortDesc": "JavaScript中的文档阅读器, pdf/ppt/opt/odt等文件渲染成HTML",
      "url": "https://viewerjs.org",
      "category": "JavaScript"
    },
    {
      "id": "215",
      "title": "filepond",
      "description": "灵活而有趣的JavaScript文件上传库",
      "shortDesc": "灵活而有趣的JavaScript文件上传库",
      "url": "https://pqina.nl/filepond",
      "category": "JavaScript"
    },
    {
      "id": "216",
      "title": "FileSaver.js",
      "description": "客户端保存文件的解决方案，非常适合在客户端上生成文件的Web应用程序",
      "shortDesc": "客户端保存文件的解决方案，非常适合在客户端上生成文件的Web应用程序",
      "url": "https://github.com/eligrey/FileSaver.js",
      "category": "JavaScript"
    },
    {
      "id": "217",
      "title": "jsPDF",
      "description": "一个使用JavaScript生成PDF的库",
      "shortDesc": "一个使用JavaScript生成PDF的库",
      "url": "https://parall.ax/products/jspdf",
      "category": "JavaScript"
    },
    {
      "id": "231",
      "title": "validator.js",
      "description": "字符串验证插件、表单验证",
      "shortDesc": "字符串验证插件、表单验证",
      "url": "https://github.com/chriso/validator.js",
      "category": "JavaScript"
    },
    {
      "id": "232",
      "title": "async-validator",
      "description": "异步验证器",
      "shortDesc": "异步验证器",
      "url": "https://github.com/yiminghe/async-validator",
      "category": "JavaScript"
    },
    {
      "id": "233",
      "title": "yup",
      "description": "无效的简单对象架构验证",
      "shortDesc": "无效的简单对象架构验证",
      "url": "https://runkit.com/jquense/yup",
      "category": "JavaScript"
    },
    {
      "id": "234",
      "title": "localForage",
      "description": "离线存储，使用简单但功能强大的API包装IndexedDB，WebSQL或localStorage。",
      "shortDesc": "离线存储，使用简单但功能强大的API包装IndexedDB，WebSQL或localStorage。",
      "url": "https://github.com/localForage/localForage",
      "category": "JavaScript"
    },
    {
      "id": "235",
      "title": "introjs",
      "description": "为您的网站和项目提供新功能介绍和逐步用户指南的更好方法",
      "shortDesc": "为您的网站和项目提供新功能介绍和逐步用户指南的更好方法",
      "url": "https://introjs.com",
      "category": "JavaScript"
    },
    {
      "id": "236",
      "title": "shepherd",
      "description": "引导您的用户浏览您的应用程序",
      "shortDesc": "引导您的用户浏览您的应用程序",
      "url": "https://shepherdjs.dev",
      "category": "JavaScript"
    },
    {
      "id": "237",
      "title": "bootstrap-tour",
      "description": "使用Twitter Bootstrap Popovers快速方便地进行产品浏览",
      "shortDesc": "使用Twitter Bootstrap Popovers快速方便地进行产品浏览",
      "url": "http://bootstraptour.com",
      "category": "JavaScript"
    },
    {
      "id": "238",
      "title": "React",
      "description": "用于构建用户界面的 JavaScript 库",
      "shortDesc": "用于构建用户界面的 JavaScript 库",
      "url": "https://zh-hans.reactjs.org",
      "category": "React"
    },
    {
      "id": "239",
      "title": "React Router",
      "description": "React 路由管理",
      "shortDesc": "React 路由管理",
      "url": "https://react-router.docschina.org",
      "category": "React"
    },
    {
      "id": "240",
      "title": "Redux",
      "description": "React 状态管理",
      "shortDesc": "React 状态管理",
      "url": "http://www.redux.org.cn/docs/react-redux/api.html",
      "category": "React"
    },
    {
      "id": "250",
      "title": "Ant Design",
      "description": "Ant Design - A UI Design Language",
      "shortDesc": "Ant Design - A UI Design Language",
      "url": "https://ant.design/docs/react/introduce-cn",
      "category": "React"
    },
    {
      "id": "251",
      "title": "MATERIAL-UI",
      "description": "React 组件用于更快速、更简便的 web 开发。你也可以建立你自己的设计系统，或者从 Material Design 开始",
      "shortDesc": "React 组件用于更快速、更简便的 web 开发。你也可以建立你自己的设计系统，或者从 Material Design 开始",
      "url": "https://material-ui.com/zh",
      "category": "React"
    },
    {
      "id": "252",
      "title": "element",
      "description": "elementUI组件库",
      "shortDesc": "elementUI组件库",
      "url": "https://elemefe.github.io/element-react/#/zh-CN/quick-start",
      "category": "React"
    },
    {
      "id": "253",
      "title": "react-bootstrap",
      "description": "基于Bootstrap 3构建的组件库",
      "shortDesc": "基于Bootstrap 3构建的组件库",
      "url": "https://react-bootstrap.github.io/getting-started/introduction",
      "category": "React"
    },
    {
      "id": "254",
      "title": "evergreen",
      "description": "Evergreen是一个React UI框架，用于在Web上构建雄心勃勃的产品。由Segment带给您。",
      "shortDesc": "Evergreen是一个React UI框架，用于在Web上构建雄心勃勃的产品。由Segment带给您。",
      "url": "https://evergreen.segment.com",
      "category": "React"
    },
    {
      "id": "255",
      "title": "@alifd/next",
      "description": "@alifd/next 是 Alibaba Fusion Design 的官方 React 实现, 赋能企业中后台产品开发",
      "shortDesc": "@alifd/next 是 Alibaba Fusion Design 的官方 React 实现, 赋能企业中后台产品开发",
      "url": "https://fusion.design/component/doc/102",
      "category": "React"
    },
    {
      "id": "256",
      "title": "zent",
      "description": "Zent 是有赞 PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件",
      "shortDesc": "Zent 是有赞 PC 端 WebUI 规范的 React 实现，提供了一整套基础的 UI 组件以及一些常用的业务组件",
      "url": "https://youzan.github.io/zent/zh/guides/install",
      "category": "React"
    },
    {
      "id": "257",
      "title": "React95",
      "description": "装修一新的现代的应用程序做出React Windows95的UI组件。",
      "shortDesc": "装修一新的现代的应用程序做出React Windows95的UI组件。",
      "url": "https://arturbien.github.io/React95",
      "category": "React"
    },
    {
      "id": "273",
      "title": "BizCharts",
      "description": "基于G2和React的强大数据可视化库",
      "shortDesc": "基于G2和React的强大数据可视化库",
      "url": "https://bizcharts.net/products/bizCharts",
      "category": "React"
    },
    {
      "id": "274",
      "title": "react-draggable",
      "description": "一个简单的组件，用于使元素可拖动",
      "shortDesc": "一个简单的组件，用于使元素可拖动",
      "url": "https://github.com/mzabriskie/react-draggable",
      "category": "React"
    },
    {
      "id": "275",
      "title": "react-slick",
      "description": "react走马灯组件",
      "shortDesc": "react走马灯组件",
      "url": "https://react-slick.neostack.com",
      "category": "React"
    },
    {
      "id": "276",
      "title": "react-color",
      "description": "react 拾色器",
      "shortDesc": "react 拾色器",
      "url": "http://casesandberg.github.io/react-color",
      "category": "React"
    },
    {
      "id": "277",
      "title": "react-intl",
      "description": "国际化React应用程序。这个库提供了React组件和一个API，用于格式化日期，数字和字符串，包括复数形式和处理翻译",
      "shortDesc": "国际化React应用程序。这个库提供了React组件和一个API，用于格式化日期，数字和字符串，包括复数形式和处理翻译",
      "url": "https://github.com/formatjs/react-intl",
      "category": "React"
    },
    {
      "id": "278",
      "title": "react-data-grid",
      "description": "使用React构建的类似于Excel的网格组件，具有编辑器，键盘导航，复制和粘贴等功能",
      "shortDesc": "使用React构建的类似于Excel的网格组件，具有编辑器，键盘导航，复制和粘贴等功能",
      "url": "http://adazzle.github.io/react-data-grid",
      "category": "React"
    }，
{
  "links": [
    {
      "id": "429",
      "title": "JavaScript Puzzlers",
      "description": "你真的了解JavaScript吗？来试试吧！",
      "shortDesc": "你真的了解JavaScript吗？来试试吧！",
      "url": "http://javascript-puzzlers.herokuapp.com",
      "category": "参考资料"
    },
    {
      "id": "430",
      "title": "InterviewMap",
      "description": "打造最好的面试图谱",
      "shortDesc": "打造最好的面试图谱",
      "url": "https://yuchengkai.cn/docs/zh",
      "category": "参考资料"
    },
    {
      "id": "431",
      "title": "飞冰早报",
      "description": "飞冰早报",
      "shortDesc": "飞冰早报",
      "url": "http://fe.jskou.com/ice",
      "category": "参考资料"
    },
    {
      "id": "451",
      "title": "Ghost",
      "description": "Ghost 是一个基于 Node.js 构建的开源博客平台。Ghost 的设计初衷是为了让博客的发布变得简单优雅，Ghost 具有易用的书写界面和体验,博客内容默认采用 Markdown 语法书写。Ghost 的目标是取代臃肿的 Wordpress",
      "shortDesc": "Ghost 是一个基于 Node.js 构建的开源博客平台。Ghost 的设计初衷是为了让博客的发布变得简单优雅，Ghost 具有易用的书写界面和体验,博客内容默认采用 Markdown 语法书写。Ghost 的目标是取代臃肿的 Wordpress",
      "url": "https://ghost.org",
      "category": "生态系统"
    },
    {
      "id": "452",
      "title": "nodebestpractices",
      "description": "Node.js 最佳实践, 最大的汇集，且每周都在增长 - 当前，超过50个最佳实现，样式指南，架构建议已经呈现",
      "shortDesc": "Node.js 最佳实践, 最大的汇集，且每周都在增长 - 当前，超过50个最佳实现，样式指南，架构建议已经呈现",
      "url": "https://github.com/goldbergyoni/nodebestpractices",
      "category": "生态系统"
    },
    {
      "id": "453",
      "title": "request",
      "description": "简化的HTTP请求客户端",
      "shortDesc": "简化的HTTP请求客户端",
      "url": "https://github.com/request/request",
      "category": "依赖包"
    },
    {
      "id": "454",
      "title": "superagent",
      "description": "一个小型渐进式客户端HTTP请求库，Node.js模块具有相同的API，具有许多高级HTTP客户端功能",
      "shortDesc": "一个小型渐进式客户端HTTP请求库，Node.js模块具有相同的API，具有许多高级HTTP客户端功能",
      "url": "http://visionmedia.github.io/superagent",
      "category": "依赖包"
    },
    {
      "id": "455",
      "title": "axios",
      "description": "基于Promise的HTTP客户端，用于浏览器和node.js",
      "shortDesc": "基于Promise的HTTP客户端，用于浏览器和node.js",
      "url": "https://github.com/axios/axios",
      "category": "依赖包"
    },
    {
      "id": "456",
      "title": "node-fetch",
      "description": "一个轻量级的模块，将window.fetch带到Node.js",
      "shortDesc": "一个轻量级的模块，将window.fetch带到Node.js",
      "url": "https://github.com/node-fetch/node-fetch",
      "category": "依赖包"
    },
    {
      "id": "457",
      "title": "bent",
      "description": "带有async await的功能性JS HTTP客户端（Node.js和Fetch）",
      "shortDesc": "带有async await的功能性JS HTTP客户端（Node.js和Fetch）",
      "url": "https://github.com/mikeal/bent",
      "category": "依赖包"
    },
    {
      "id": "458",
      "title": "superagent-proxy",
      "description": "superagent代理扩展，这使您可以通过某种代理来代理HTTP请求",
      "shortDesc": "superagent代理扩展，这使您可以通过某种代理来代理HTTP请求",
      "url": "https://github.com/TooTallNate/superagent-proxy",
      "category": "依赖包"
    },
    {
      "id": "459",
      "title": "Puppeteer",
      "description": "Puppeteer是一个Node库，它提供了一个高级API来通过DevTools协议控制Chromium或Chrome",
      "shortDesc": "Puppeteer是一个Node库，它提供了一个高级API来通过DevTools协议控制Chromium或Chrome",
      "url": "https://pptr.dev",
      "category": "依赖包"
    },
    {
      "id": "480",
      "title": "ccap",
      "description": "node.js使用C++库CImg生成验证码，无需安装任何其他库或软件",
      "shortDesc": "node.js使用C++库CImg生成验证码，无需安装任何其他库或软件",
      "url": "https://github.com/DoubleSpout/ccap",
      "category": "依赖包"
    },
    {
      "id": "481",
      "title": "text-to-svg",
      "description": "将文本转换为SVG路径而不依赖于本机",
      "shortDesc": "将文本转换为SVG路径而不依赖于本机",
      "url": "https://github.com/shrhdk/text-to-svg",
      "category": "依赖包"
    },
    {
      "id": "482",
      "title": "svg2png",
      "description": "使用PhantomJS将SVG转换为PNG",
      "shortDesc": "使用PhantomJS将SVG转换为PNG",
      "url": "https://github.com/domenic/svg2png",
      "category": "依赖包"
    },
    {
      "id": "483",
      "title": "node-http-proxy",
      "description": "一个HTTP可编程代理库，支持websocket。它适用于实现反向代理和负载平衡器等组件",
      "shortDesc": "一个HTTP可编程代理库，支持websocket。它适用于实现反向代理和负载平衡器等组件",
      "url": "https://github.com/nodejitsu/node-http-proxy",
      "category": "依赖包"
    },
    {
      "id": "484",
      "title": "http-proxy-middleware",
      "description": "用于连接，快速和浏览器同步的单线程node.js http-proxy中间件（基于node-http-proxy）",
      "shortDesc": "用于连接，快速和浏览器同步的单线程node.js http-proxy中间件（基于node-http-proxy）",
      "url": "https://github.com/chimurai/http-proxy-middleware",
      "category": "依赖包"
    },
    {
      "id": "485",
      "title": "esprima",
      "description": "ECMAScript解析基础架构，可进行多用途分析, 将代码转换成AST",
      "shortDesc": "ECMAScript解析基础架构，可进行多用途分析, 将代码转换成AST",
      "url": "https://esprima.org",
      "category": "依赖包"
    },
    {
      "id": "486",
      "title": "recast",
      "description": "JavaScript AST转换器，非破坏性漂亮打印机和自动源映射生成器",
      "shortDesc": "JavaScript AST转换器，非破坏性漂亮打印机和自动源映射生成器",
      "url": "https://github.com/benjamn/recast",
      "category": "依赖包"
    },
    {
      "id": "487",
      "title": "node-xlsx",
      "description": "NodeJS excel文件解析器和构建器",
      "shortDesc": "NodeJS excel文件解析器和构建器",
      "url": "https://github.com/mgcrea/node-xlsx",
      "category": "依赖包"
    },
    {
      "id": "488",
      "title": "fs-extra",
      "description": "操作系统文件，用于替代内置的fs模块",
      "shortDesc": "操作系统文件，用于替代内置的fs模块",
      "url": "https://www.xiejiahe.com/detail/5b52fca1df53a14006035e1e",
      "category": "依赖包"
    },
    {
      "id": "521",
      "title": "http-server",
      "description": "一个简单的零配置命令行http服务器",
      "shortDesc": "一个简单的零配置命令行http服务器",
      "url": "https://github.com/indexzero/http-server",
      "category": "依赖包"
    },
    {
      "id": "522",
      "title": "node-schedule",
      "description": "Node的类似cron-like和非not-cron-like的作业调度程序。",
      "shortDesc": "Node的类似cron-like和非not-cron-like的作业调度程序。",
      "url": "https://github.com/node-schedule/node-schedule",
      "category": "依赖包"
    },
    {
      "id": "523",
      "title": "qrcode-terminal",
      "description": "QRCode终端版",
      "shortDesc": "QRCode终端版",
      "url": "https://github.com/gtanner/qrcode-terminal",
      "category": "依赖包"
    },
    {
      "id": "524",
      "title": "localtunnel",
      "description": "localtunnel将您的localhost暴露给世界，以便于测试和共享！无需混淆DNS或部署只是为了让其他人测试您的更改",
      "shortDesc": "localtunnel将您的localhost暴露给世界，以便于测试和共享！无需混淆DNS或部署只是为了让其他人测试您的更改",
      "url": "https://localtunnel.github.io/www",
      "category": "依赖包"
    },
    {
      "id": "525",
      "title": "passport",
      "description": "Node.js的简单，不显眼的身份验证",
      "shortDesc": "Node.js的简单，不显眼的身份验证",
      "url": "http://www.passportjs.org",
      "category": "依赖包"
    },
    {
      "id": "526",
      "title": "parameter",
      "description": "参数验证工具",
      "shortDesc": "参数验证工具",
      "url": "https://github.com/node-modules/parameter",
      "category": "依赖包"
    },
    {
      "id": "527",
      "title": "bytes",
      "description": "用于解析字符串字节, b/kb/mb/gb/tb/pb",
      "shortDesc": "用于解析字符串字节, b/kb/mb/gb/tb/pb",
      "url": "https://github.com/visionmedia/bytes.js",
      "category": "依赖包"
    },
    {
      "id": "528",
      "title": "js-yaml",
      "description": "JavaScript YAML解析器和转储器。非常快",
      "shortDesc": "JavaScript YAML解析器和转储器。非常快",
      "url": "https://nodeca.github.io/js-yaml",
      "category": "依赖包"
    },
    {
      "id": "550",
      "title": "Koa",
      "description": "下一代Node.js Web框架",
      "shortDesc": "下一代Node.js Web框架",
      "url": "https://koa.bootcss.com",
      "category": "WEB框架"
    },
    {
      "id": "551",
      "title": "Express",
      "description": "Express - 快速、开放、极简的 Web 开发框架",
      "shortDesc": "Express - 快速、开放、极简的 Web 开发框架",
      "url": "http://expressjs.jser.us",
      "category": "WEB框架"
    },
    {
      "id": "552",
      "title": "node-inspector",
      "description": "Node.js调试器基于Blink Developer Tools",
      "shortDesc": "Node.js调试器基于Blink Developer Tools",
      "url": "https://github.com/node-inspector/node-inspector",
      "category": "辅助工具"
    },
    {
      "id": "553",
      "title": "debug",
      "description": "一个微小的JavaScript调试工具，以Node.js核心的调试技术为模型。适用于Node.js和Web浏览器",
      "shortDesc": "一个微小的JavaScript调试工具，以Node.js核心的调试技术为模型。适用于Node.js和Web浏览器",
      "url": "https://github.com/visionmedia/debug",
      "category": "辅助工具"
    },
    {
      "id": "554",
      "title": "ndb",
      "description": "ndb是针对Node.js的改进调试体验，由Chrome DevTools启用",
      "shortDesc": "ndb是针对Node.js的改进调试体验，由Chrome DevTools启用",
      "url": "https://github.com/GoogleChromeLabs/ndb",
      "category": "辅助工具"
    },
    {
      "id": "555",
      "title": "nvm",
      "description": "Node版本管理器 - 用于管理多个活动node.js版本的简单bash脚本",
      "shortDesc": "Node版本管理器 - 用于管理多个活动node.js版本的简单bash脚本",
      "url": "https://github.com/creationix/nvm",
      "category": "辅助工具"
    },
    {
      "id": "556",
      "title": "nvm-windows",
      "description": "适用于Windows的node.js版本管理实用程序",
      "shortDesc": "适用于Windows的node.js版本管理实用程序",
      "url": "https://github.com/coreybutler/nvm-windows",
      "category": "辅助工具"
    },
    {
      "id": "557",
      "title": "nvs",
      "description": "Node Version Switcher - 用于在Node.js的版本和分支之间切换的跨平台工具(受到nvm的启发)",
      "shortDesc": "Node Version Switcher - 用于在Node.js的版本和分支之间切换的跨平台工具(受到nvm的启发)",
      "url": "https://github.com/jasongin/nvs",
      "category": "辅助工具"
    },
    {
      "id": "558",
      "title": "n",
      "description": "Node.js版本管理：无配置文件，无复杂的API，非常简单",
      "shortDesc": "Node.js版本管理：无配置文件，无复杂的API，非常简单",
      "url": "https://github.com/tj/n",
      "category": "辅助工具"
    },
    {
      "id": "559",
      "title": "log4js-node",
      "description": "log4js 是一个 nodejs 日志管理工具，可以将日志以各种形式输出到各种渠道。",
      "shortDesc": "log4js 是一个 nodejs 日志管理工具，可以将日志以各种形式输出到各种渠道。",
      "url": "https://log4js-node.github.io/log4js-node/index.html",
      "category": "依赖包"
    },
    {
      "id": "584",
      "title": "gin",
      "description": "Gin是用Go（Golang）编写的Web框架。它具有类似于martini的API，其性能比httprouter快40倍。如果您需要性能和良好的生产率，您会喜欢Gin",
      "shortDesc": "Gin是用Go（Golang）编写的Web框架。它具有类似于martini的API，其性能比httprouter快40倍。如果您需要性能和良好的生产率，您会喜欢Gin",
      "url": "https://learnku.com/docs/gin-gonic/2019/go-gin-document",
      "category": "生态系统"
    },
    {
      "id": "585",
      "title": "beego",
      "description": "beego是用于Go编程语言的开源，高性能Web框架",
      "shortDesc": "beego是用于Go编程语言的开源，高性能Web框架",
      "url": "http://beego.me",
      "category": "生态系统"
    },
    {
      "id": "586",
      "title": "martini",
      "description": "Go的经典Web框架",
      "shortDesc": "Go的经典Web框架",
      "url": "http://martini.codegangsta.io",
      "category": "生态系统"
    },
    {
      "id": "587",
      "title": "echo",
      "description": "高性能，简约的Go Web框架",
      "shortDesc": "高性能，简约的Go Web框架",
      "url": "https://echo.labstack.com",
      "category": "生态系统"
    },
    {
      "id": "588",
      "title": "iris",
      "description": "最快的HTTP / 2 Go Web框架。AWS Lambda，gRPC，MVC，唯一路由器，Websocket，会话，测试套件，依赖注入等。expressjs和laravel的真正继承者|",
      "shortDesc": "最快的HTTP / 2 Go Web框架。AWS Lambda，gRPC，MVC，唯一路由器，Websocket，会话，测试套件，依赖注入等。expressjs和laravel的真正继承者|",
      "url": "https://www.iris-go.com",
      "category": "生态系统"
    },
    {
      "id": "617",
      "title": "qrcode",
      "description": "二维码生成",
      "shortDesc": "二维码生成",
      "url": "https://github.com/skip2/go-qrcode",
      "category": "依赖包"
    },
    {
      "id": "618",
      "title": "casbin",
      "description": "权限管理库，支持Golang中的访问控制模型，如ACL，RBAC，ABAC",
      "shortDesc": "权限管理库，支持Golang中的访问控制模型，如ACL，RBAC，ABAC",
      "url": "https://casbin.org/zh-CN",
      "category": "依赖包"
    },
    {
      "id": "619",
      "title": "resty",
      "description": "用于Go的简单HTTP和REST客户端库",
      "shortDesc": "用于Go的简单HTTP和REST客户端库",
      "url": "https://github.com/go-resty/resty",
      "category": "依赖包"
    },
    {
      "id": "620",
      "title": "grpc-go",
      "description": "gRPC的Go语言实现。基于HTTP/2的RPC",
      "shortDesc": "gRPC的Go语言实现。基于HTTP/2的RPC",
      "url": "https://grpc.io",
      "category": "依赖包"
    },
    {
      "id": "621",
      "title": "colly",
      "description": "Colly提供了一个干净的界面来编写任何种类的爬虫",
      "shortDesc": "Colly提供了一个干净的界面来编写任何种类的爬虫",
      "url": "http://go-colly.org",
      "category": "依赖包"
    },
    {
      "id": "622",
      "title": "cors",
      "description": "使用net / http可配置的处理程序来处理CORS请求",
      "shortDesc": "使用net / http可配置的处理程序来处理CORS请求",
      "url": "https://github.com/rs/cors",
      "category": "依赖包"
    },
    {
      "id": "623",
      "title": "color",
      "description": "CLI 控制台颜色渲染工具库, 支持Windows",
      "shortDesc": "CLI 控制台颜色渲染工具库, 支持Windows",
      "url": "https://github.com/fatih/color",
      "category": "CLI"
    },
    {
      "id": "624",
      "title": "cli",
      "description": "一个简单，快速且有趣的软件包，用于在Go中构建命令行应用",
      "shortDesc": "一个简单，快速且有趣的软件包，用于在Go中构建命令行应用",
      "url": "https://github.com/urfave/cli",
      "category": "CLI"
    },
    {
      "id": "625",
      "title": "cobra",
      "description": "Cobra既是用于创建功能强大的现代CLI应用程序的库，又是用于生成应用程序和命令文件程序",
      "shortDesc": "Cobra既是用于创建功能强大的现代CLI应用程序的库，又是用于生成应用程序和命令文件程序",
      "url": "https://github.com/spf13/cobra",
      "category": "CLI"
    },
    {
      "id": "655",
      "title": "Flutter",
      "description": "Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的",
      "shortDesc": "Flutter是谷歌的移动UI框架，可以快速在iOS和Android上构建高质量的原生用户界面。 Flutter可以与现有的代码一起工作。在全世界，Flutter正在被越来越多的开发者和组织使用，并且Flutter是完全免费、开源的",
      "url": "https://flutterchina.club",
      "category": "生态系统"
    },
    {
      "id": "656",
      "title": "Flutter Icon",
      "description": "Flutter内置Icon组件图标速查表",
      "shortDesc": "Flutter内置Icon组件图标速查表",
      "url": "https://material.io/resources/icons/?style=baseline",
      "category": "生态系统"
    },
    {
      "id": "657",
      "title": "imei_plugin",
      "description": "用flutter在Android中获取imei的插件",
      "shortDesc": "用flutter在Android中获取imei的插件",
      "url": "https://github.com/kevincaicedo/imei_plugin",
      "category": "生态系统"
    },
    {
      "id": "658",
      "title": "multi_image_picker",
      "description": "Flutter插件，可让您在iOS和Android上显示多图像选择器。",
      "shortDesc": "Flutter插件，可让您在iOS和Android上显示多图像选择器。",
      "url": "https://github.com/Sh1d0w/multi_image_picker",
      "category": "生态系统"
    },
    {
      "id": "659",
      "title": "sqflite",
      "description": "SQLite flutter plugin",
      "shortDesc": "SQLite flutter plugin",
      "url": "https://github.com/tekartik/sqflite",
      "category": "生态系统"
    },
    {
      "id": "660",
      "title": "dio",
      "description": "dio是一个强大的Dart Http请求库，支持Restful API、FormData、拦截器、请求取消、Cookie管理、文件上传/下载、超时、自定义适配器等",
      "shortDesc": "dio是一个强大的Dart Http请求库，支持Restful API、FormData、拦截器、请求取消、Cookie管理、文件上传/下载、超时、自定义适配器等",
      "url": "https://github.com/flutterchina/dio",
      "category": "生态系统"
    },
    {
      "id": "661",
      "title": "fish-redux",
      "description": "一个基于Redux状态管理的组合式flutter应用程序框架。它适用于建筑中型和大型应用。",
      "shortDesc": "一个基于Redux状态管理的组合式flutter应用程序框架。它适用于建筑中型和大型应用。",
      "url": "https://github.com/alibaba/fish-redux",
      "category": "生态系统"
    },
    {
      "id": "694",
      "title": "click",
      "description": "Python可组合命令行界面工具包",
      "shortDesc": "Python可组合命令行界面工具包",
      "url": "https://github.com/pallets/click",
      "category": "依赖包"
    },
    {
      "id": "695",
      "title": "JMESPath",
      "description": "JMESPath是JSON的查询语言",
      "shortDesc": "JMESPath是JSON的查询语言",
      "url": "https://github.com/jmespath/jmespath.py",
      "category": "依赖包"
    },
    {
      "id": "696",
      "title": "Django",
      "description": "具有期限的完美主义者的Web框架。",
      "shortDesc": "具有期限的完美主义者的Web框架。",
      "url": "https://www.djangoproject.com",
      "category": "框架"
    },
    {
      "id": "697",
      "title": "flask",
      "description": "用于构建Web应用程序的Python微框架。",
      "shortDesc": "用于构建Web应用程序的Python微框架。",
      "url": "https://palletsprojects.com/p/flask",
      "category": "框架"
    },
    {
      "id": "698",
      "title": "简明 Python 教程",
      "description": "旨在于介绍如何使用 Python 语言进行编程的自由图书。它以教材与指南的形式为入门者介绍 Python 语言。如果你对电脑知识的了解仅限于如何保存文本文件的话，那这本书就是为你准备的。",
      "shortDesc": "旨在于介绍如何使用 Python 语言进行编程的自由图书。它以教材与指南的形式为入门者介绍 Python 语言。如果你对电脑知识的了解仅限于如何保存文本文件的话，那这本书就是为你准备的。",
      "url": "https://bop.mol.uno",
      "category": "参考资料"
    },
    {
      "id": "699",
      "title": "100天从新手到大师",
      "description": "Python - 100天从新手到大师",
      "shortDesc": "Python - 100天从新手到大师",
      "url": "https://github.com/jackfrued/Python-100-Days",
      "category": "参考资料"
    },
    {
      "id": "700",
      "title": "Python 入门指南",
      "description": "Python 入门指南",
      "shortDesc": "Python 入门指南",
      "url": "https://python666.cn/cls/lesson/list",
      "category": "参考资料"
    },
    {
      "id": "701",
      "title": "What the f*ck Python!",
      "description": "一些有趣且鲜为人知的 Python 特性.",
      "shortDesc": "一些有趣且鲜为人知的 Python 特性.",
      "url": "https://github.com/satwikkansal/wtfpython",
      "category": "参考资料"
    },
    {
      "id": "740",
      "title": "Material Design",
      "description": "Google的材料设计",
      "shortDesc": "Google的材料设计",
      "url": "https://material.io",
      "category": "Design"
    },
    {
      "id": "741",
      "title": "GitHub Octodex",
      "description": "由GitHub Design团队创建和维护的所有吉祥物素材",
      "shortDesc": "由GitHub Design团队创建和维护的所有吉祥物素材",
      "url": "https://octodex.github.com",
      "category": "Design"
    },
    {
      "id": "742",
      "title": "Collect UI",
      "description": "从每日ui档案库及其他收集的每日灵感。 根据Dribbble拍摄的照片，手工挑选，每天更新",
      "shortDesc": "从每日ui档案库及其他收集的每日灵感。 根据Dribbble拍摄的照片，手工挑选，每天更新",
      "url": "http://collectui.com",
      "category": "Design"
    },
    {
      "id": "743",
      "title": "icons8",
      "description": "下载免费图标，音乐，素材图片，矢量，UX插图和视频音乐",
      "shortDesc": "下载免费图标，音乐，素材图片，矢量，UX插图和视频音乐",
      "url": "https://icons8.cn",
      "category": "Design"
    },
    {
      "id": "744",
      "title": "vectorlogo",
      "description": "3000多种精美的SVG徽标，非常适合您的自述文件或积分页面",
      "shortDesc": "3000多种精美的SVG徽标，非常适合您的自述文件或积分页面",
      "url": "https://www.vectorlogo.zone",
      "category": "Design"
    },
    {
      "id": "745",
      "title": "shareicon",
      "description": "超过25万个icon免费集合",
      "shortDesc": "超过25万个icon免费集合",
      "url": "https://www.shareicon.net",
      "category": "Design"
    },
    {
      "id": "746",
      "title": "SVG Logos",
      "description": "超过1000+SVG Logos集合",
      "shortDesc": "超过1000+SVG Logos集合",
      "url": "https://github.com/gilbarbara/logos/archive/master.zip",
      "category": "Design"
    },
    {
      "id": "747",
      "title": "iconfont",
      "description": "阿里妈妈MUX倾力打造的矢量图标管理、交流平台",
      "shortDesc": "阿里妈妈MUX倾力打造的矢量图标管理、交流平台",
      "url": "http://www.iconfont.cn",
      "category": "Design"
    },
    {
      "id": "748",
      "title": "iconscount",
      "description": "免费下载图标，插图和库存照片",
      "shortDesc": "免费下载图标，插图和库存照片",
      "url": "https://iconscout.com",
      "category": "Design"
    },
    {
      "id": "779",
      "title": "Jenkins",
      "description": "Jenkins是开源CI&CD软件领导者， 提供超过1000个插件来支持构建、部署、自动化， 满足任何项目的需要",
      "shortDesc": "Jenkins是开源CI&CD软件领导者， 提供超过1000个插件来支持构建、部署、自动化， 满足任何项目的需要",
      "url": "https://www.jenkins.io/zh",
      "category": "参考文档"
    },
    {
      "id": "780",
      "title": "learnxinyminutes-docs",
      "description": "在Y分钟内学习X",
      "shortDesc": "在Y分钟内学习X",
      "url": "https://learnxinyminutes.com",
      "category": "参考文档"
    },
    {
      "id": "781",
      "title": "Vscode Docs",
      "description": "Vscode 扩展开发文档",
      "shortDesc": "Vscode 扩展开发文档",
      "url": "https://liiked.github.io/VS-Code-Extension-Doc-ZH/#",
      "category": "参考文档"
    }，
{
  "links": [
    {
      "id": "782",
      "title": "YAML教程",
      "description": "YAML教程",
      "shortDesc": "YAML教程",
      "url": "https://www.yiibai.com/yaml",
      "category": "参考文档"
    },
    {
      "id": "783",
      "title": "Chrome Extension",
      "description": "谷歌浏览器扩展插件开发文档",
      "shortDesc": "谷歌浏览器扩展插件开发文档",
      "url": "https://developer.chrome.com/extensions",
      "category": "参考文档"
    },
    {
      "id": "784",
      "title": "菜鸟教程",
      "description": "提供了编程的基础技术教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。 同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习编程",
      "shortDesc": "提供了编程的基础技术教程, 介绍了HTML、CSS、Javascript、Python，Java，Ruby，C，PHP , MySQL等各种编程语言的基础知识。 同时本站中也提供了大量的在线实例，通过实例，您可以更好的学习编程",
      "url": "https://www.runoob.com",
      "category": "教程相关"
    },
    {
      "id": "785",
      "title": "慕课网",
      "description": "慕课网-程序员的梦工厂",
      "shortDesc": "慕课网-程序员的梦工厂",
      "url": "https://www.imooc.com",
      "category": "教程相关"
    },
    {
      "id": "825",
      "title": "Web_Application_Tips",
      "description": "Web安全测试检查表",
      "shortDesc": "Web安全测试检查表",
      "url": "https://github.com/0a1b2c3d4e5f67890/Web_Application_Tips",
      "category": "网络安全"
    },
    {
      "id": "826",
      "title": "百度统计",
      "description": "全球最大的中文网站流量分析平台，帮助企业收集网站访问数据，提供流量趋势、来源分析...",
      "shortDesc": "全球最大的中文网站流量分析平台，帮助企业收集网站访问数据，提供流量趋势、来源分析...",
      "url": "https://tongji.baidu.com",
      "category": "运营相关"
    },
    {
      "id": "827",
      "title": "CNZZ",
      "description": "CNZZ数据专家是全球最大的中文网站统计分析平台，为各类网站提供免费、安全、稳定",
      "shortDesc": "CNZZ数据专家是全球最大的中文网站统计分析平台，为各类网站提供免费、安全、稳定",
      "url": "http://www.cnzz.com",
      "category": "运营相关"
    },
    {
      "id": "828",
      "title": "百度搜索资源平台",
      "description": "百度搜索资源平台_让网站更具价值",
      "shortDesc": "百度搜索资源平台_让网站更具价值",
      "url": "https://ziyuan.baidu.com",
      "category": "运营相关"
    },
    {
      "id": "829",
      "title": "问卷星",
      "description": "免费使用问卷星创建问卷调查、在线考试、360度评估等应用",
      "shortDesc": "免费使用问卷星创建问卷调查、在线考试、360度评估等应用",
      "url": "https://www.wjx.cn",
      "category": "运营相关"
    },
    {
      "id": "830",
      "title": "金数据",
      "description": "金数据是人人可用的在线表单工具，帮助用户收集和管理日常工作中的数据，提升工作效率",
      "shortDesc": "金数据是人人可用的在线表单工具，帮助用户收集和管理日常工作中的数据，提升工作效率",
      "url": "https://jinshuju.net",
      "category": "运营相关"
    },
    {
      "id": "831",
      "title": "Google Analytics",
      "description": "Google Analytics是一个收集数据并将其分析整理成实用报告的平台",
      "shortDesc": "Google Analytics是一个收集数据并将其分析整理成实用报告的平台",
      "url": "https://analytics.google.com",
      "category": "运营相关"
    },
    {
      "id": "832",
      "title": "腾讯移动分析",
      "description": "腾讯移动分析是腾讯数据云，腾讯大数据战略的核心产品，提供app应用的移动统计分析，支持android/iOS平台，实现用户画像、数据可视化、数据挖掘、渠道效果分析等综合数据服务",
      "shortDesc": "腾讯移动分析是腾讯数据云，腾讯大数据战略的核心产品，提供app应用的移动统计分析，支持android/iOS平台，实现用户画像、数据可视化、数据挖掘、渠道效果分析等综合数据服务",
      "url": "https://mta.qq.com/mta",
      "category": "运营相关"
    },
    {
      "id": "833",
      "title": "Google Adsense",
      "description": "",
      "shortDesc": "",
      "url": "https://www.google.com/adsense",
      "category": "运营相关"
    },          
 ]           
];

/**
 * 搜索网站功能
 * @param {string} query - 搜索关键词
 * @returns {Array} - 符合条件的网站列表
 */
export function searchSites(query) {
  if (!query) return sites;
  const lowerQuery = query.toLowerCase();
  return sites.filter(site => {
    return (
      site.title.toLowerCase().includes(lowerQuery) ||
      site.url.toLowerCase().includes(lowerQuery) ||
      site.category.toLowerCase().includes(lowerQuery)
    );
  });
}
/**
 * 将网站数据转换为HTML标记
 * 允许直接在页面中嵌入HTML内容
 * @param {Array} sitesList - 要呈现的网站列表
 * @returns {string} - HTML标记字符串
 */
export function sitesToHtml(sitesList) {
  if (!sitesList || !sitesList.length) return '<p>没有找到符合条件的网站</p>';
  const html = sitesList.map(site => {
    // 转义HTML特殊字符以防止XSS攻击
    const safeTitle = escapeHtml(site.title);
    const safeDesc = escapeHtml(site.shortDesc || site.description);
    const safeUrl = escapeHtml(site.url);
    const safeIcon = escapeHtml(site.icon || '/images/default.svg');
    return `
      <div class="site-card" data-category="${site.category}">
        <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <div class="site-icon">
            <img src="${safeIcon}" alt="${safeTitle}" loading="lazy" onerror="this.src='/images/default.svg'">
          </div>
          <div class="site-info">
            <h3>${safeTitle}</h3>
            <p>${safeDesc}</p>
          </div>
        </a>
      </div>
    `;
  }).join('');
  return `<div class="sites-grid">${html}</div>`;
}
/**
 * 安全转义HTML特殊字符
 * 防止XSS攻击
 * @param {string} str - 需要转义的字符串
 * @returns {string} - 安全的HTML字符串
 */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

