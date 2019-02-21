module.exports = {
  title: 'HPWizard Docs',
  description: 'Documentation for HPWizard plugin',
  plugins: ['@vuepress/pwa', '@vuepress/back-to-top'],
  themeConfig: {
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/',
          '/installation/'
        ]
      },
      {
        title: 'Configuration',
        collapsable: false,
        children: [
          '/configuration/',
          '/configuration/language-file'
        ]
      },
    ]
  }
}