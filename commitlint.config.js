module.exports = {
  // 繼承的規則
  extends: ['@commitlint/config-conventional'],
  // 定義規則類型
  rules: {
    // type 類型定義，表示 git 提交的 type 必須在以下類型範圍內
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能 feature
        'fix', // 修復 bug
        'docs', // 文檔註釋
        'style', // 代碼格式(不影響代碼運行的變動)
        'refactor', // 重構(既不增加新功能，也不是修復bug)
        'perf', // 性能優化
        'test', // 增加測試
        'chore', // 構建過程或輔助工具的變動
        'revert', // 回退
        'build' // 打包
      ]
    ],
    // subject 大小寫不做校驗
    'subject-case': [0]
  }
}
