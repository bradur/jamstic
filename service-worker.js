!function(){"use strict";const a=["client/client.b37a0dc5.js","client/index.31f5addd.js","client/[slug].bdd0526a.js","client/index.c5d650ba.js","client/index.40a012f0.js","client/[...slug].4e475d2b.js","client/client.cd7b98bb.js"].concat(["service-worker-index.html","alakajam/11th-alakajam/zarguufs-bone-crypt-adventure/images/1075.png","alakajam/13th-alakajam/robocalypse-now/images/1153.gif","alakajam/1st-alakajam/to-brew-a-love-potion/images/80.png","alakajam/1st-kajam/teleballtation/images/101.png","alakajam/2nd-alakajam/lights-camera-shoot/images/158.png","alakajam/3rd-alakajam/cabin-smash-craze/images/318.png","alakajam/3rd-kajam/j3-the-janitor/images/110.png","alakajam/4th-alakajam/portable-looping-machine/images/448.png","alakajam/5th-alakajam/illustrious-escape/images/588.png","alakajam/6th-alakajam/the-last-ace/images/710.png","alakajam/7th-alakajam/zarguufs-cauldron/images/807.png","alakajam/8th-alakajam/zarguufs-cellar/images/880.png","alakajam/scorespace-alakajam/the-crystal-tower/images/949.png","alakajamf/11th-alakajam/zarguufs-bone-crypt-adventure/images/1075.png","alakajamf/1st-alakajam/to-brew-a-love-potion/images/80.png","alakajamf/1st-kajam/teleballtation/images/101.png","alakajamf/2nd-alakajam/lights-camera-shoot/images/158.png","alakajamf/3rd-alakajam/cabin-smash-craze/images/318.png","alakajamf/3rd-kajam/j3-the-janitor/images/110.png","alakajamf/4th-alakajam/portable-looping-machine/images/448.png","alakajamf/5th-alakajam/illustrious-escape/images/588.png","alakajamf/6th-alakajam/the-last-ace/images/710.png","alakajamf/7th-alakajam/zarguufs-cauldron/images/807.png","alakajamf/8th-alakajam/zarguufs-cellar/images/880.png","alakajamf/scorespace-alakajam/the-crystal-tower/images/949.png","alakajamgdf/11th-alakajam/zarguufs-bone-crypt-adventure/images/1075.png","alakajamgdf/1st-alakajam/to-brew-a-love-potion/images/80.png","alakajamgdf/1st-kajam/teleballtation/images/101.png","alakajamgdf/2nd-alakajam/lights-camera-shoot/images/158.png","alakajamgdf/3rd-alakajam/cabin-smash-craze/images/318.png","alakajamgdf/3rd-kajam/j3-the-janitor/images/110.png","alakajamgdf/4th-alakajam/portable-looping-machine/images/448.png","alakajamgdf/5th-alakajam/illustrious-escape/images/588.png","alakajamgdf/6th-alakajam/the-last-ace/images/710.png","alakajamgdf/7th-alakajam/zarguufs-cauldron/images/807.png","alakajamgdf/8th-alakajam/zarguufs-cellar/images/880.png","alakajamgdf/scorespace-alakajam/the-crystal-tower/images/949.png","alakajams/11th-alakajam/zarguufs-bone-crypt-adventure/images/1075.png","alakajams/13th-alakajam/robocalypse-now/images/1153.gif","alakajams/1st-alakajam/to-brew-a-love-potion/images/80.png","alakajams/1st-kajam/teleballtation/images/101.png","alakajams/2nd-alakajam/lights-camera-shoot/images/158.png","alakajams/3rd-alakajam/cabin-smash-craze/images/318.png","alakajams/3rd-kajam/j3-the-janitor/images/110.png","alakajams/4th-alakajam/portable-looping-machine/images/448.png","alakajams/5th-alakajam/illustrious-escape/images/588.png","alakajams/6th-alakajam/the-last-ace/images/710.png","alakajams/7th-alakajam/zarguufs-cauldron/images/807.png","alakajams/8th-alakajam/zarguufs-cellar/images/880.png","alakajams/scorespace-alakajam/the-crystal-tower/images/949.png","favicon.png","global-game-jam/2016/errand-voodoo/images/game_logo_4.png","global-game-jam/2016/errand-voodoo/images/ss1_20.jpg","global-game-jam/2016/errand-voodoo/images/ss2_20.jpg","global-game-jam/2016/errand-voodoo/images/ss3_16.jpg","global-game-jam/2016/errand-voodoo/images/ss4_6.jpg","global-game-jam/2017/smoke-signals-everyday/images/vlcsnap-error113.png","global-game-jam/2017/smoke-signals-everyday/images/vlcsnap-error683.png","global-game-jam/2017/smoke-signals-everyday/images/vlcsnap-error926.png","global-game-jam/2018/datasmith/images/2018-01-28_15-20-06_game_-_microsoft_visual_studio.png","global-game-jam/2018/datasmith/images/2018-01-28_15-20-29_game_-_microsoft_visual_studio.png","global-game-jam/2018/datasmith/images/2018-01-28_15-21-14_game_-_microsoft_visual_studio.png","global-game-jam/2019/the-h-word/images/fgj2019-alien1.png","global-game-jam/2019/the-h-word/images/fgj2019-alien2.png","global-game-jam/2020/space-funk/images/cover2.png","global-game-jam/2020/space-funk/images/parts.png","global-game-jam/2020/space-funk/images/pull.png","global-game-jam/2020/space-funk/images/war.png","global-game-jam/2020/space-funk/images/warp.png","global-game-jamfdfg/2016/errand-voodoo/images/game_logo_4.png","global-game-jamfdfg/2016/errand-voodoo/images/ss1_20.jpg","global-game-jamfdfg/2016/errand-voodoo/images/ss2_20.jpg","global-game-jamfdfg/2016/errand-voodoo/images/ss3_16.jpg","global-game-jamfdfg/2016/errand-voodoo/images/ss4_6.jpg","global-game-jamfdfg/2017/smoke-signals-everyday/images/vlcsnap-error113.png","global-game-jamfdfg/2017/smoke-signals-everyday/images/vlcsnap-error683.png","global-game-jamfdfg/2017/smoke-signals-everyday/images/vlcsnap-error926.png","global-game-jamfdfg/2018/datasmith/images/2018-01-28_15-20-06_game_-_microsoft_visual_studio.png","global-game-jamfdfg/2018/datasmith/images/2018-01-28_15-20-29_game_-_microsoft_visual_studio.png","global-game-jamfdfg/2018/datasmith/images/2018-01-28_15-21-14_game_-_microsoft_visual_studio.png","global-game-jamfdfg/2019/the-h-word/images/fgj2019-alien1.png","global-game-jamfdfg/2019/the-h-word/images/fgj2019-alien2.png","global-game-jamfdfg/2020/space-funk/images/cover2.png","global-game-jamfdfg/2020/space-funk/images/parts.png","global-game-jamfdfg/2020/space-funk/images/pull.png","global-game-jamfdfg/2020/space-funk/images/war.png","global-game-jamfdfg/2020/space-funk/images/warp.png","global-game-jamfff/2016/errand-voodoo/images/ss1_20.jpg","global-game-jamfff/2016/errand-voodoo/images/ss2_20.jpg","global-game-jamfff/2016/errand-voodoo/images/ss3_16.jpg","global-game-jamfff/2016/errand-voodoo/images/ss4_6.jpg","global-game-jamfff/2017/smoke-signals-everyday/images/vlcsnap-error113.png","global-game-jamfff/2017/smoke-signals-everyday/images/vlcsnap-error683.png","global-game-jamfff/2017/smoke-signals-everyday/images/vlcsnap-error926.png","global-game-jamfff/2018/datasmith/images/2018-01-28_15-20-06_game_-_microsoft_visual_studio.png","global-game-jamfff/2018/datasmith/images/2018-01-28_15-20-29_game_-_microsoft_visual_studio.png","global-game-jamfff/2019/the-h-word/images/fgj2019-alien2.png","global-game-jamfff/2020/space-funk/images/parts.png","global-game-jamfff/2020/space-funk/images/pull.png","global-game-jamfff/2020/space-funk/images/war.png","global-game-jamfff/2020/space-funk/images/warp.png","global-game-jamfs/2016/errand-voodoo/images/game_logo_4.png","global-game-jamfs/2016/errand-voodoo/images/ss1_20.jpg","global-game-jamfs/2016/errand-voodoo/images/ss2_20.jpg","global-game-jamfs/2016/errand-voodoo/images/ss3_16.jpg","global-game-jamfs/2016/errand-voodoo/images/ss4_6.jpg","global-game-jamfs/2017/smoke-signals-everyday/images/vlcsnap-error113.png","global-game-jamfs/2017/smoke-signals-everyday/images/vlcsnap-error683.png","global-game-jamfs/2017/smoke-signals-everyday/images/vlcsnap-error926.png","global-game-jamfs/2018/datasmith/images/2018-01-28_15-20-06_game_-_microsoft_visual_studio.png","global-game-jamfs/2018/datasmith/images/2018-01-28_15-20-29_game_-_microsoft_visual_studio.png","global-game-jamfs/2018/datasmith/images/2018-01-28_15-21-14_game_-_microsoft_visual_studio.png","global-game-jamfs/2019/the-h-word/images/fgj2019-alien1.png","global-game-jamfs/2019/the-h-word/images/fgj2019-alien2.png","global-game-jamfs/2020/space-funk/images/cover2.png","global-game-jamfs/2020/space-funk/images/parts.png","global-game-jamfs/2020/space-funk/images/pull.png","global-game-jamfs/2020/space-funk/images/war.png","global-game-jamfs/2020/space-funk/images/warp.png","global-game-jamrsf/2016/errand-voodoo/images/game_logo_4.png","global-game-jamrsf/2016/errand-voodoo/images/ss1_20.jpg","global-game-jamrsf/2016/errand-voodoo/images/ss2_20.jpg","global-game-jamrsf/2016/errand-voodoo/images/ss3_16.jpg","global-game-jamrsf/2016/errand-voodoo/images/ss4_6.jpg","global-game-jamrsf/2017/smoke-signals-everyday/images/game_logo_4.png","global-game-jamrsf/2017/smoke-signals-everyday/images/vlcsnap-error113.png","global-game-jamrsf/2017/smoke-signals-everyday/images/vlcsnap-error683.png","global-game-jamrsf/2017/smoke-signals-everyday/images/vlcsnap-error926.png","global-game-jamrsf/2018/datasmith/images/2018-01-28_15-20-06_game_-_microsoft_visual_studio.png","global-game-jamrsf/2018/datasmith/images/2018-01-28_15-20-29_game_-_microsoft_visual_studio.png","global-game-jamrsf/2018/datasmith/images/2018-01-28_15-21-14_game_-_microsoft_visual_studio.png","global-game-jamrsf/2019/the-h-word/images/fgj2019-alien1.png","global-game-jamrsf/2019/the-h-word/images/fgj2019-alien2.png","global-game-jamrsf/2020/space-funk/images/cover2.png","global-game-jamrsf/2020/space-funk/images/parts.png","global-game-jamrsf/2020/space-funk/images/pull.png","global-game-jamrsf/2020/space-funk/images/war.png","global-game-jamrsf/2020/space-funk/images/warp.png","global-game-jams/2018/datasmith/images/2018-01-28_15-20-06_game_-_microsoft_visual_studio.png","global-game-jams/2018/datasmith/images/2018-01-28_15-20-29_game_-_microsoft_visual_studio.png","global-game-jams/2018/datasmith/images/2018-01-28_15-21-14_game_-_microsoft_visual_studio.png","global-game-jams/2019/the-h-word/images/fgj2019-alien1.png","global-game-jams/2019/the-h-word/images/fgj2019-alien2.png","global-game-jams/2020/space-funk/images/cover2.png","global-game-jams/2020/space-funk/images/parts.png","global-game-jams/2020/space-funk/images/pull.png","global-game-jams/2020/space-funk/images/war.png","global-game-jams/2020/space-funk/images/warp.png","global.css","ludum-dare/30/realworld-vs-cleanworld/images/40138-shot0.png-eq-900-500.jpg","ludum-dare/31/simian-situation/images/40138-shot0.png-eq-900-500.jpg","ludum-dare/32/how-to-teleport/images/40138-shot0-1429484881.jpg-eq-900-500.jpg","ludum-dare/33/heroes-always-win/images/40138-shot0-1440362710.png-eq-900-500.jpg","ludum-dare/34/sticky-stuff/images/40138-shot0-1450054388.png-eq-900-500.jpg","ludum-dare/35/the-magnificent-lepus/images/40138-shot0-1460928402.png-eq-900-500.jpg","ludum-dare/36/left-to-ruin/images/40138-shot0-1472428102.png-eq-900-500.jpg","ludum-dare/37/sorry,-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-dare/37/sorry-we're-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-dare/37/sorry-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-dare/38/out-of-this-small-world/images/6a38.png","ludum-dare/38/out-of-this-small-world/images/8ea.png","ludum-dare/38/out-of-this-small-world/images/8ed.png","ludum-dare/38/out-of-this-small-world/images/8f1.png","ludum-dare/39/in-charge-of-power/images/5d9e.png","ludum-dare/39/in-charge-of-power/images/5e1a.png","ludum-dare/39/in-charge-of-power/images/5e1b.png","ludum-dare/39/in-charge-of-power/images/5e24.png","ludum-dare/39/in-charge-of-power/images/5e26.png","ludum-dare/40/being-plundered/images/a80e.png","ludum-dare/40/being-plundered/images/a817.png","ludum-dare/40/being-plundered/images/a81a.png","ludum-dare/40/being-plundered/images/a85d.png","ludum-dare/40/being-plundered/images/a90f.png","ludum-dare/40/being-plundered/images/e9e0.png","ludum-dare/41/drive-or-die/images/10313.png","ludum-dare/41/drive-or-die/images/1031a.png","ludum-dare/42/slime-janitor/images/167a1.png","ludum-dare/42/slime-janitor/images/16832.png","ludum-dare/42/slime-janitor/images/16835.png","ludum-dare/42/slime-janitor/images/16837.png","ludum-dare/43/not-safe-for-teamwork/images/1c26d.png","ludum-dare/43/not-safe-for-teamwork/images/1c26f.png","ludum-dare/44/pay-with-your-blood/images/2119d.png","ludum-dare/44/pay-with-your-blood/images/2119e.png","ludum-dare/44/pay-with-your-blood/images/2119f.png","ludum-dare/44/pay-with-your-blood/images/249ec.png","ludum-dare/45/research-station-3152/images/2852a.png","ludum-dare/45/research-station-3152/images/28547.png","ludum-dare/47/tranquil-grove/images/36ac2.png","ludum-dare/47/tranquil-grove/images/36ac3.png","ludum-dare/47/tranquil-grove/images/36ac4.png","ludum-dare/47/tranquil-grove/images/36ace.png","ludum-dare/47/tranquil-grove/images/3979c.png","ludum-dare/48/sunk-cost/images/3def2.png","ludum-dare/48/sunk-cost/images/3defd.png","ludum-dare/48/sunk-cost/images/3df01.png","ludum-dare/48/sunk-cost/images/3df08.png","ludum-dare/48/sunk-cost/images/429dd.gif","ludum-dare/49/a-hoppy-walk/images/45170.png","ludum-daref/30/realworld-vs-cleanworld/images/40138-shot0.png-eq-900-500.jpg","ludum-daref/31/simian-situation/images/40138-shot0.png-eq-900-500.jpg","ludum-daref/32/how-to-teleport/images/40138-shot0-1429484881.jpg-eq-900-500.jpg","ludum-daref/33/heroes-always-win/images/40138-shot0-1440362710.png-eq-900-500.jpg","ludum-daref/34/sticky-stuff/images/40138-shot0-1450054388.png-eq-900-500.jpg","ludum-daref/35/the-magnificent-lepus/images/40138-shot0-1460928402.png-eq-900-500.jpg","ludum-daref/36/left-to-ruin/images/40138-shot0-1472428102.png-eq-900-500.jpg","ludum-daref/37/sorry,-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-daref/37/sorry-we're-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-daref/37/sorry-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-daref/38/out-of-this-small-world/images/6a38.png","ludum-daref/38/out-of-this-small-world/images/8ea.png","ludum-daref/38/out-of-this-small-world/images/8ed.png","ludum-daref/38/out-of-this-small-world/images/8f1.png","ludum-daref/39/in-charge-of-power/images/5d9e.png","ludum-daref/39/in-charge-of-power/images/5e1a.png","ludum-daref/39/in-charge-of-power/images/5e1b.png","ludum-daref/39/in-charge-of-power/images/5e24.png","ludum-daref/39/in-charge-of-power/images/5e26.png","ludum-daref/40/being-plundered/images/a80e.png","ludum-daref/40/being-plundered/images/a817.png","ludum-daref/40/being-plundered/images/a81a.png","ludum-daref/40/being-plundered/images/a85d.png","ludum-daref/40/being-plundered/images/a90f.png","ludum-daref/40/being-plundered/images/e9e0.png","ludum-daref/41/drive-or-die/images/10313.png","ludum-daref/41/drive-or-die/images/1031a.png","ludum-daref/42/slime-janitor/images/167a1.png","ludum-daref/42/slime-janitor/images/16832.png","ludum-daref/42/slime-janitor/images/16835.png","ludum-daref/42/slime-janitor/images/16837.png","ludum-daref/43/not-safe-for-teamwork/images/1c26d.png","ludum-daref/43/not-safe-for-teamwork/images/1c26f.png","ludum-daref/44/pay-with-your-blood/images/2119d.png","ludum-daref/44/pay-with-your-blood/images/2119e.png","ludum-daref/44/pay-with-your-blood/images/2119f.png","ludum-daref/44/pay-with-your-blood/images/249ec.png","ludum-daref/45/research-station-3152/images/2852a.png","ludum-daref/45/research-station-3152/images/28547.png","ludum-daref/47/tranquil-grove/images/36ac2.png","ludum-daref/47/tranquil-grove/images/36ac3.png","ludum-daref/47/tranquil-grove/images/36ac4.png","ludum-daref/47/tranquil-grove/images/36ace.png","ludum-daref/47/tranquil-grove/images/3979c.png","ludum-daref/48/sunk-cost/images/3def2.png","ludum-daref/48/sunk-cost/images/3defd.png","ludum-daref/48/sunk-cost/images/3df01.png","ludum-daref/48/sunk-cost/images/3df08.png","ludum-daref/48/sunk-cost/images/429dd.gif","ludum-darefdg/30/realworld-vs-cleanworld/images/40138-shot0.png-eq-900-500.jpg","ludum-darefdg/31/simian-situation/images/40138-shot0.png-eq-900-500.jpg","ludum-darefdg/32/how-to-teleport/images/40138-shot0-1429484881.jpg-eq-900-500.jpg","ludum-darefdg/33/heroes-always-win/images/40138-shot0-1440362710.png-eq-900-500.jpg","ludum-darefdg/34/sticky-stuff/images/40138-shot0-1450054388.png-eq-900-500.jpg","ludum-darefdg/35/the-magnificent-lepus/images/40138-shot0-1460928402.png-eq-900-500.jpg","ludum-darefdg/36/left-to-ruin/images/40138-shot0-1472428102.png-eq-900-500.jpg","ludum-darefdg/37/sorry,-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-darefdg/37/sorry-we're-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-darefdg/37/sorry-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-darefdg/40/being-plundered/images/e9e0.png","ludum-darefdg/44/pay-with-your-blood/images/249ec.png","ludum-darefdg/47/tranquil-grove/images/36ac2.png","ludum-darefdg/47/tranquil-grove/images/36ac3.png","ludum-darefdg/47/tranquil-grove/images/36ac4.png","ludum-darefdg/47/tranquil-grove/images/36ace.png","ludum-darefdg/47/tranquil-grove/images/3979c.png","ludum-darefdg/48/sunk-cost/images/3def2.png","ludum-darefdg/48/sunk-cost/images/3defd.png","ludum-darefdg/48/sunk-cost/images/3df01.png","ludum-darefdg/48/sunk-cost/images/3df08.png","ludum-darefdg/48/sunk-cost/images/429dd.gif","ludum-dares/30/realworld-vs-cleanworld/images/40138-shot0.png-eq-900-500.jpg","ludum-dares/31/simian-situation/images/40138-shot0.png-eq-900-500.jpg","ludum-dares/32/how-to-teleport/images/40138-shot0-1429484881.jpg-eq-900-500.jpg","ludum-dares/33/heroes-always-win/images/40138-shot0-1440362710.png-eq-900-500.jpg","ludum-dares/34/sticky-stuff/images/40138-shot0-1450054388.png-eq-900-500.jpg","ludum-dares/35/the-magnificent-lepus/images/40138-shot0-1460928402.png-eq-900-500.jpg","ludum-dares/36/left-to-ruin/images/40138-shot0-1472428102.png-eq-900-500.jpg","ludum-dares/37/sorry,-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-dares/37/sorry-we're-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-dares/37/sorry-were-full/images/40138-shot0-1481504513.png-eq-900-500.jpg","ludum-dares/38/out-of-this-small-world/images/6a38.png","ludum-dares/38/out-of-this-small-world/images/8ea.png","ludum-dares/38/out-of-this-small-world/images/8ed.png","ludum-dares/38/out-of-this-small-world/images/8f1.png","ludum-dares/39/in-charge-of-power/images/5d9e.png","ludum-dares/39/in-charge-of-power/images/5e1a.png","ludum-dares/39/in-charge-of-power/images/5e1b.png","ludum-dares/39/in-charge-of-power/images/5e24.png","ludum-dares/39/in-charge-of-power/images/5e26.png","ludum-dares/40/being-plundered/images/a80e.png","ludum-dares/40/being-plundered/images/a817.png","ludum-dares/40/being-plundered/images/a81a.png","ludum-dares/40/being-plundered/images/a85d.png","ludum-dares/40/being-plundered/images/a90f.png","ludum-dares/40/being-plundered/images/e9e0.png","ludum-dares/41/drive-or-die/images/10313.png","ludum-dares/41/drive-or-die/images/1031a.png","ludum-dares/42/slime-janitor/images/167a1.png","ludum-dares/42/slime-janitor/images/16832.png","ludum-dares/42/slime-janitor/images/16835.png","ludum-dares/42/slime-janitor/images/16837.png","ludum-dares/43/not-safe-for-teamwork/images/1c26d.png","ludum-dares/43/not-safe-for-teamwork/images/1c26f.png","ludum-dares/44/pay-with-your-blood/images/2119d.png","ludum-dares/44/pay-with-your-blood/images/2119e.png","ludum-dares/44/pay-with-your-blood/images/2119f.png","ludum-dares/44/pay-with-your-blood/images/249ec.png","ludum-dares/45/research-station-3152/images/2852a.png","ludum-dares/45/research-station-3152/images/28547.png","ludum-dares/47/tranquil-grove/images/36ac2.png","ludum-dares/47/tranquil-grove/images/36ac3.png","ludum-dares/47/tranquil-grove/images/36ac4.png","ludum-dares/47/tranquil-grove/images/36ace.png","ludum-dares/47/tranquil-grove/images/3979c.png","ludum-dares/48/sunk-cost/images/3def2.png","ludum-dares/48/sunk-cost/images/3defd.png","ludum-dares/48/sunk-cost/images/3df01.png","ludum-dares/48/sunk-cost/images/3df08.png","ludum-dares/48/sunk-cost/images/429dd.gif","ludum-dares/49/a-hoppy-walk/images/45170.png","ludum-dares/49/a-hoppy-walk/images/4519f.png","ludum-dares/49/a-hoppy-walk/images/451a0.png"]),e=new Set(a);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1643314743106").then(e=>e.addAll(a)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(async a=>{for(const e of a)"cache1643314743106"!==e&&await caches.delete(e);self.clients.claim()}))}),self.addEventListener("fetch",a=>{if("GET"!==a.request.method||a.request.headers.has("range"))return;const g=new URL(a.request.url);g.protocol.startsWith("http")&&(g.hostname===self.location.hostname&&g.port!==self.location.port||(g.host===self.location.host&&e.has(g.pathname)?a.respondWith(caches.match(a.request)):"only-if-cached"!==a.request.cache&&a.respondWith(caches.open("offline1643314743106").then(async e=>{try{const g=await fetch(a.request);return e.put(a.request,g.clone()),g}catch(g){const s=await e.match(a.request);if(s)return s;throw g}}))))})}();
