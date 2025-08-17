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
    'id': 'nav-discovery',
    'title': '发现导航',
    'description': '发现导航，最强轻量级导航网站，汇集了海量优质资源，帮助开发者快速发现实用工具和学习资料，支持自定义分类和搜索，提升开发效率。',
    'shortDesc': '轻量级导航网站。',
    'url': 'https://github.com/xjh22222228/nav',
    'category': '开发神器'
  },
  {
    'id': 'github-cli',
    'title': 'Github-CLI',
    'description': 'GitHub的官方命令行工具，提供无缝集成GitHub功能的终端操作，支持拉取请求、问题管理和仓库操作，简化开发者的工作流程，提高生产力。',
    'shortDesc': 'GitHub命令行工具。',
    'url': 'https://cli.github.com',
    'category': '开发神器'
  },
  {
    'id': 'coveralls',
    'title': 'Coveralls',
    'description': '专注于代码覆盖率分析的平台，帮助开发者识别测试套件未覆盖的部分，支持开源库免费使用，确保代码交付更可靠和高质量。',
    'shortDesc': '代码覆盖率工具。',
    'url': 'https://coveralls.io',
    'category': '开发神器'
  },
  {
    'id': 'releasly',
    'title': 'Releasly',
    'description': '开源版本发布通知服务，直接发送邮件提醒开发者最新更新，助力项目跟踪和及时集成，提升开源生态的响应速度。',
    'shortDesc': '开源发布通知工具。',
    'url': 'https://www.releasly.co',
    'category': '开发神器'
  },
  {
    'id': 'curl-converter',
    'title': 'Convert cURL',
    'description': '在线转换cURL命令到多种编程语言如Python、JavaScript和Go的工具，简化API测试和集成过程，适用于多语言开发环境。',
    'shortDesc': 'cURL命令转换器。',
    'url': 'https://curl.trillworks.com',
    'category': '开发神器'
  },
  {
    'id': 'supervisor',
    'title': 'Supervisor',
    'description': '客户端/服务器系统，用于监控和控制UNIX-like操作系统上的进程，支持多进程管理，确保应用稳定运行和自动重启。',
    'shortDesc': '进程监控工具。',
    'url': 'http://supervisord.org',
    'category': '开发神器'
  },
  {
    'id': 'sonarqube',
    'title': 'SonarQube',
    'description': '开源代码质量和安全检查平台，支持多种语言，自动检测漏洞和代码异味，帮助团队编写更干净、安全的代码。',
    'shortDesc': '代码质量检查工具。',
    'url': 'https://www.sonarqube.org',
    'category': '开发神器'
  },
  {
    'id': 'pastebin',
    'title': 'Pastebin',
    'description': '在线代码共享服务，以URL形式快速发送代码片段，支持语法高亮和过期设置，方便团队协作和调试。',
    'shortDesc': '在线代码共享工具。',
    'url': 'https://paste.ubuntu.com',
    'category': '开发神器'
  },
  {
    'id': 'upx',
    'title': 'UPX',
    'description': '终极可执行文件打包器，支持多种格式压缩，减少文件大小而不影响功能，适用于软件分发和资源优化。',
    'shortDesc': '可执行文件打包器。',
    'url': 'https://github.com/upx/upx',
    'category': '开发神器'
  },
  {
    'id': 'askgit',
    'title': 'askgit',
    'description': '使用SQL查询Git仓库的工具，支持生成报告和分析代码库，帮助开发者深入理解项目历史和结构。',
    'shortDesc': 'Git仓库SQL查询工具。',
    'url': 'https://github.com/augmentable-dev/askgit',
    'category': '开发神器'
  },
  {
    'id': 'sentry',
    'title': 'Sentry',
    'description': '实时崩溃报告平台，支持Web、移动和游戏应用，集成多种语言，帮助开发者快速定位和修复错误，提升用户体验。',
    'shortDesc': '崩溃报告工具。',
    'url': 'https://sentry.io',
    'category': '开发神器'
  },
  {
    'id': 'randomuser',
    'title': 'randomuser',
    'description': '免费API生成随机用户数据，包括头像和个人信息，类似于Lorem Ipsum，用于测试和填充占位符数据。',
    'shortDesc': '随机用户生成API。',
    'url': 'https://randomuser.me',
    'category': '开发神器'
  },
  {
    'id': 'github-readme-stats',
    'title': 'github-readme-stats',
    'description': '动态生成GitHub统计卡片，用于README文件展示提交、星标等指标，帮助开发者个性化展示项目活跃度。',
    'shortDesc': 'GitHub统计卡片生成器。',
    'url': 'https://github.com/anuraghazra/github-readme-stats/blob/master/readme_cn.md',
    'category': '开发神器'
  },
  {
    'id': 'hits',
    'title': 'Hits',
    'description': '简单计数服务，跟踪GitHub项目查看次数，支持Markdown集成，帮助开发者了解项目受欢迎程度。',
    'shortDesc': 'GitHub查看计数工具。',
    'url': 'http://hits.dwyl.io',
    'category': '开发神器'
  },
  {
    'id': 'github-file-accelerator',
    'title': 'GitHub 文件加速',
    'description': '加速GitHub文件下载的服务，解决国内访问缓慢问题，支持直接链接，提升开发者获取资源的效率。',
    'shortDesc': 'GitHub文件加速服务。',
    'url': 'https://shrill-pond-3e81.hunsh.workers.dev',
    'category': '开发神器'
  },
  {
    'id': 'shields-io',
    'title': 'Shields IO',
    'description': '生成SVG徽章的工具，用于展示版本、许可证和构建状态，集成到README中增强项目专业性。',
    'shortDesc': 'SVG徽章生成器。',
    'url': 'https://shields.io',
    'category': '开发神器'
  },
  {
    'id': 'fundebug',
    'title': 'FunDebug',
    'description': '支持前端JavaScript、Node.js和微信小程序的错误监控平台，提供实时警报和诊断，帮助快速修复bug。',
    'shortDesc': '错误监控平台。',
    'url': 'https://www.fundebug.com',
    'category': '开发神器'
  },
  {
    'id': 'asciiworld',
    'title': 'Asciiworld',
    'description': '收集程序员创意ASCII艺术的网站，用于代码注释和文档装饰，增添开发乐趣和个性。',
    'shortDesc': 'ASCII艺术集合。',
    'url': 'http://www.asciiworld.com',
    'category': '开发神器'
  },
  {
    'id': 'jsfiddle',
    'title': 'jsfiddle',
    'description': '强大的前端代码在线演示平台，支持HTML/CSS/JS实时预览和分享，适合教学和原型验证。',
    'shortDesc': '前端代码演示工具。',
    'url': 'http://jsfiddle.net',
    'category': '开发神器'
  },
  {
    'id': 'codeif',
    'title': 'CODEIF',
    'description': '变量命名建议工具，从GitHub等来源智能推荐名称，提升代码可读性和一致性。',
    'shortDesc': '变量命名工具。',
    'url': 'https://unbug.github.io/codelf',
    'category': '开发神器'
  },
  {
    'id': 'asciiflow-infinity',
    'title': 'ASCIIFlow Infinity',
    'description': '无限画布的ASCII图表绘制工具，支持导出到文本/HTML，集成Google Drive，适合文档和设计草图。',
    'shortDesc': 'ASCII图表绘制工具。',
    'url': 'http://asciiflow.com',
    'category': '开发神器'
  },
  {
    'id': 'gitzip',
    'title': 'gitzip',
    'description': 'GitHub子目录下载工具，将特定文件夹打包为ZIP，简化部分资源获取过程。',
    'shortDesc': 'GitHub子目录下载工具。',
    'url': 'https://kinolien.github.io/gitzip',
    'category': '开发神器'
  },
  {
    'id': 'serverchan',
    'title': 'Server酱',
    'description': '程序员与服务器通信工具，支持微信推送监控警报，实时掌握应用状态。',
    'shortDesc': '服务器通信工具。',
    'url': 'http://sc.ftqq.com',
    'category': '开发神器'
  },
  {
    'id': 'mkcert',
    'title': 'mkcert',
    'description': '零配置生成本地SSL证书的工具，支持自定义域名，确保开发环境安全和兼容。',
    'shortDesc': 'SSL证书生成工具。',
    'url': 'https://github.com/FiloSottile/mkcert',
    'category': '开发神器'
  },
  {
    'id': 'carbon',
    'title': 'carbon',
    'description': '创建精美代码截图的工具，支持自定义主题和导出，适用于分享和文档。',
    'shortDesc': '代码截图工具。',
    'url': 'https://carbon.now.sh',
    'category': '开发神器'
  },
  {
    'id': 'setup-ipsec-vpn',
    'title': 'setup-ipsec-vpn',
    'description': '快速构建IPsec VPN服务器的脚本，支持Ubuntu、Debian，集成L2TP和Cisco协议，保障远程访问安全。',
    'shortDesc': 'VPN服务器搭建脚本。',
    'url': 'https://github.com/hwdsl2/setup-ipsec-vpn',
    'category': '开发神器'
  },
  {
    'id': 'nginxconfig',
    'title': 'nginxconfig',
    'description': 'Nginx配置生成器，提供可视化界面和最佳实践，简化服务器设置过程。',
    'shortDesc': 'Nginx配置生成器。',
    'url': 'https://www.digitalocean.com/community/tools/nginx#?',
    'category': '开发神器'
  },
  {
    'id': 'graphql-explorer',
    'title': 'GraphQL Explorer',
    'description': 'GitHub官方GraphQL资源管理器，使用真实生产数据进行查询测试和学习。',
    'shortDesc': 'GraphQL资源管理器。',
    'url': 'https://developer.github.com/v4/explorer',
    'category': '开发神器'
  },
  {
    'id': 'patorjk',
    'title': 'patorjk',
    'description': '文本转ASCII艺术的工具，支持多种字体，适用于命令行和文档装饰。',
    'shortDesc': '文本转ASCII工具。',
    'url': 'http://patorjk.com/software/taag/#p=display&f=Graffiti&t=xiejiahe',
    'category': '开发神器'
  },
  {
    'id': 'lens',
    'title': 'lens',
    'description': 'Kubernetes IDE，支持Mac/Windows/Linux，提供可视化管理和监控，简化容器编排操作。',
    'shortDesc': 'Kubernetes IDE。',
    'url': 'https://k8slens.dev',
    'category': '开发神器'
  },
  {
    'id': 'public-apis',
    'title': 'public-apis',
    'description': '收集公开API接口的仓库，覆盖Web开发和软件领域，助力开发者快速集成外部服务。',
    'shortDesc': '公开API集合。',
    'url': 'https://github.com/public-apis/public-apis',
    'category': '开发神器'
  },
  {
    'id': 'astexplorer',
    'title': 'astexplorer',
    'description': '探索各种解析器生成的AST的Web工具，支持实时查看代码结构，适用于编译器和工具开发。',
    'shortDesc': 'AST探索工具。',
    'url': 'https://astexplorer.net',
    'category': '开发神器'
  },
  {
    'id': 'utools',
    'title': 'uTools',
    'description': '插件化桌面软件，支持跨平台，提供自定义工具集合，提升开发者和用户的生产效率。',
    'shortDesc': '插件化桌面工具。',
    'url': 'http://www.u.tools',
    'category': '开发神器'
  },
  {
    'id': 'ihateregex',
    'title': 'ihateregex',
    'description': '正则表达式备忘录，提供常见模式和解释，简化复杂匹配的编写过程。',
    'shortDesc': '正则表达式备忘录。',
    'url': 'https://ihateregex.io',
    'category': '开发神器'
  },
  {
    'id': 'oh-my-zsh',
    'title': 'Oh My ZSH',
    'description': '开源zsh配置框架，提供插件和主题支持，优化终端体验和命令效率。',
    'shortDesc': 'zsh配置框架。',
    'url': 'https://ohmyz.sh',
    'category': '开发神器'
  },
  {
    'id': 'tampermonkey',
    'title': 'Tampermonkey',
    'description': '流行用户脚本管理器，支持浏览器扩展，允许自定义网页功能和自动化任务。',
    'shortDesc': '用户脚本管理器。',
    'url': 'https://www.tampermonkey.net',
    'category': '开发神器'
  },
  {
    'id': 'greasy-fork',
    'title': 'Greasy Fork',
    'description': '用户脚本分享平台，提供海量扩展脚本，支持搜索和安装，提升浏览器自定义能力。',
    'shortDesc': '用户脚本平台。',
    'url': 'https://greasyfork.org/zh-CN',
    'category': '开发神器'
  },
  {
    'id': 'free-proxy',
    'title': '免费代理',
    'description': '提供免费HTTP代理IP列表，支持开发测试和数据采集，实时更新可用代理。',
    'shortDesc': '免费HTTP代理。',
    'url': 'https://www.kuaidaili.com/free/inha/1',
    'category': '开发神器'
  },
  {
    'id': 'google-workspace',
    'title': 'Google Workspace',
    'description': 'Google Workspace状态信息中心，监控服务可用性，确保开发和协作工具稳定运行。',
    'shortDesc': 'Google Workspace状态。',
    'url': 'https://www.google.com/appsstatus#hl=en&v=status',
    'category': '开发神器'
  },
  {
    'id': 'eolinker',
    'title': 'eoLinker接口管理平台',
    'description': '国内领先的在线接口管理服务，提供可视化文档和测试工具，支持团队协作，提升API开发效率。',
    'shortDesc': '接口管理平台。',
    'url': 'https://www.eolinker.com',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'yapi',
    'title': 'YApi',
    'description': '可本地部署的可视化接口管理平台，支持前后端和QA协作，提供Mock数据和自动化测试功能。',
    'shortDesc': '可视化接口平台。',
    'url': 'https://yapi.baidu.com',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'rap2',
    'title': 'RAP2',
    'description': '阿里巴巴出品的Web接口管理工具，支持自动化Mock和测试，企业级管理，提升接口开发一致性。',
    'shortDesc': 'Web接口管理工具。',
    'url': 'http://rap2.taobao.org',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'showdoc',
    'title': 'showdoc',
    'description': '适合IT团队的在线API和技术文档工具，支持Markdown和协作编辑，确保文档实时更新。',
    'shortDesc': '在线文档工具。',
    'url': 'https://www.showdoc.cc',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'docsify',
    'title': 'docsify',
    'description': '神奇的文档站点生成器，支持Markdown直接渲染，无需构建，适用于快速创建项目文档。',
    'shortDesc': '文档站点生成器。',
    'url': 'https://docsify.js.org',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'apidoc',
    'title': 'apiDoc',
    'description': 'RESTful Web API文档生成器，从代码注释自动生成文档，支持多语言，提升API可维护性。',
    'shortDesc': 'API文档生成器。',
    'url': 'http://apidocjs.com',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'docusaurus',
    'title': 'docusaurus',
    'description': 'Facebook开源的文档网站生成器，支持版本管理和搜索，适用于开源项目文档维护。',
    'shortDesc': '开源文档网站工具。',
    'url': 'https://docusaurus.io',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'zentao',
    'title': '禅道',
    'description': '灵活的项目管理软件，支持敏捷开发和bug跟踪，集成文档管理，提升团队协作。',
    'shortDesc': '项目管理软件。',
    'url': 'https://www.zentao.net',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'tapd',
    'title': 'Tapd',
    'description': '腾讯一站式敏捷研发协作平台，凝聚研发方法和实践，支持需求管理和迭代规划。',
    'shortDesc': '敏捷研发平台。',
    'url': 'https://www.tapd.cn',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'hoppscotch',
    'title': 'Hoppscotch',
    'description': '快速美观的API请求构建器，供10万+开发者使用，原名Postwoman，提供免费开源替代Postman。',
    'shortDesc': 'API请求构建器。',
    'url': 'https://hoppscotch.io',
    'category': '接口/开发文档管理'
  },
  {
    'id': 'sunny-ngrok',
    'title': 'Sunny-Ngrok',
    'description': '一键式外网访问内网工具，无需配置，支持快速隧道搭建，适用于本地开发调试。',
    'shortDesc': '内网穿透工具。',
    'url': 'https://www.ngrok.cc',
    'category': '内网穿透/代理'
  },
  {
    'id': 'frp',
    'title': 'frp',
    'description': '快速反向代理工具，帮助暴露内网服务到互联网，支持TCP/UDP，适用于远程访问和端口转发。',
    'shortDesc': '反向代理工具。',
    'url': 'https://github.com/fatedier/frp',
    'category': '内网穿透/代理'
  },
  {
    'id': 'zan-proxy',
    'title': 'zan-proxy',
    'description': '有赞开源的本地代理工具，支持调试线上页面，解决环境差异问题，提升前端开发效率。',
    'shortDesc': '本地代理工具。',
    'url': 'https://youzan.github.io/zan-proxy',
    'category': '内网穿透/代理'
  },
  {
    'id': 'ngrok',
    'title': 'ngrok',
    'description': '安全反向代理服务，建立公共端点到本地服务器的通道，支持流量捕获和分析，适用于Webhooks测试。',
    'shortDesc': '反向代理工具。',
    'url': 'https://ngrok.com',
    'category': '内网穿透/代理'
  },
  {
    'id': 'chamd5',
    'title': '查MD5',
    'description': '在线MD5解密和批量破解平台，支持加密算法研究和密码恢复，提供高效计算资源。',
    'shortDesc': 'MD5在线解密工具。',
    'url': 'http://www.cmd5.com',
    'category': '编码/解码'
  },
  {
    'id': 'jwt-io',
    'title': 'JSON Web Tokens',
    'description': 'JWT在线解码和验证工具，支持调试和生成令牌，确保API安全和身份验证。',
    'shortDesc': 'JWT在线工具。',
    'url': 'https://jwt.io',
    'category': '编码/解码'
  },
  {
    'id': 'base64',
    'title': 'base64',
    'description': '在线Base64编码/解码服务，支持文件和文本转换，适用于数据传输和嵌入。',
    'shortDesc': 'Base64在线工具。',
    'url': 'http://base64.xpcha.com',
    'category': '编码/解码'
  },
  {
    'id': 'ipify',
    'title': 'ipify',
    'description': '简单公共IP地址API，提供可靠的IPv4/IPv6查询，支持自动化脚本和网络诊断。',
    'shortDesc': '公共IP API。',
    'url': 'https://www.ipify.org',
    'category': '免费公开API'
  },
  {
    'id': 'taobao-location',
    'title': '归属地查询',
    'description': '淘宝免费手机号码归属地查询API，支持实时数据更新，适用于位置服务和验证。',
    'shortDesc': '手机归属地API。',
    'url': 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=13333333333',
    'category': '免费公开API'
  }
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

