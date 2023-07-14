/**
 * noPropertyAccessFromIndexSignature 默认为false
 * 建议设置为true
 */

declare function getSettings(): GameSettings;
interface GameSettings {
  speed: "fast" | "medium" | "slow";
  quality: "high" | "low";
  [key: string]: string;
}

const settings2 = getSettings();
settings2.speed;
settings2.quality;
// noPropertyAccessFromIndexSignature = true时，由于username在GameSetting中不一定存在，所以禁止使用`.`
settings2.username;
// 应该使用这个
settings2['username'];