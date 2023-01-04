module.exports = {
  // 可選類型
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修復' },
    { value: 'docs', name: 'docs:     文檔變更' },
    { value: 'style', name: 'style:    代碼格式(不影響代碼運行的變動)' },
    {
      value: 'refactor',
      name: 'refactor: 重構(既不是增加feature，也不是修復bug)'
    },
    { value: 'perf', name: 'perf:     性能優化' },
    { value: 'test', name: 'test:     增加測試' },
    { value: 'chore', name: 'chore:    構建過程或輔助工具的變動' },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'build', name: 'build:    打包' }
  ],
  // 消息步驟
  messages: {
    type: '請選擇提交類型:',
    customScope: '請輸入修改範圍(可選):',
    subject: '請簡要描述提交(必填):',
    body: '請輸入詳細描述(可選):',
    footer: '請輸入要關閉的issue(可選):',
    confirmCommit: '確認使用以上信息提交？ (y/n/e/h)'
  },
  // 跳過問題
  skipQuestions: ['body', 'footer'],
  // subject文字長度默認是72
  subjectLimit: 72
}
