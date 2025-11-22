export const seo = {
  title: 'Beiyao | 开发者、学生、游戏玩家、探索者',
  description:
    '我叫 Beiyao，目前是一名在读高中生。喜欢游戏，探索GitHub有趣的项目。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://beiyaoo.tops'
      : 'http://localhost:3000'
  ),
} as const
