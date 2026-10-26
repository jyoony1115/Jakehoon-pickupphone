const STORAGE_KEYS = {
  kakao: 'pickupPhone.kakaoChats',
  x: 'pickupPhone.xPosts',
  notes: 'pickupPhone.notes',
  musinsa: 'pickupPhone.musinsa'
};

const CONTACT_ORDER = ['Sunghoon', 'Niki', 'Jay', 'Jungwon', 'Sunoo', '不要退群❌'];
const DEFAULT_NOTES = [
  {
    id: 'note-1',
    title: '周四吃龙山参鸡汤',
    content: '和朋友约在龙山参鸡汤，记得提前预约。带好雨伞，晚上七点集合。',
    updatedAt: '2026-10-22T18:00:00'
  },
  {
    id: 'note-2',
    title: '完成乐高',
    content: '把最后一块小零件装上，今天晚上做完整理。',
    updatedAt: '2026-10-23T20:35:00'
  },
  {
    id: 'note-3',
    title: '练习室练舞预约',
    content: '联系练习室确认周末预约时间，记得带舞鞋和水壶。',
    updatedAt: '2026-10-24T09:20:00'
  },
  {
    id: 'note-4',
    title: '新专辑录音',
    content: '录音棚下午四点，准备好主歌和副歌分轨，确认试听版本。',
    updatedAt: '2026-10-25T15:40:00'
  }
];

const CONTACT_META = {
  Sunghoon: { initials: 'S', avatarClass: 'alt1', profile: '合唱练习 / 录音工作室' },
  Niki: { initials: 'N', avatarClass: 'alt2', profile: '舞蹈练习 / 周末约拍' },
  Jay: { initials: 'J', avatarClass: 'alt3', profile: '音乐制作 / 朋友聚会' },
  Jungwon: { initials: 'J', avatarClass: 'alt4', profile: '音乐与摄影 / 旅行计划' },
  Sunoo: { initials: 'S', avatarClass: 'alt1', profile: '练习记录 / 晚间聊天' },
  '不要退群❌': { initials: '群', avatarClass: 'alt2', profile: '朋友群 / 生活安排' }
};

const DEFAULT_KAKAO_CHATS = {
  Sunghoon: [
    { id: 'sh-1', sender: 'me', text: '你在宿舍吗？', time: '2026-10-25T11:20:00' },
    { id: 'sh-2', sender: 'them', text: '在啊，怎么了？', time: '2026-10-25T11:20:30' },
    { id: 'sh-3', sender: 'me', text: '我刚买了 Melona，准备拿过去给你。', time: '2026-10-25T11:21:00' },
    { id: 'sh-4', sender: 'them', text: '你怎么突然想起来。', time: '2026-10-25T11:21:30' },
    { id: 'sh-5', sender: 'me', text: '因为你前两天一直说想吃。', time: '2026-10-25T11:22:00' },
    { id: 'sh-6', sender: 'them', text: '那你是直接过来？', time: '2026-10-25T11:22:30' },
    { id: 'sh-7', sender: 'me', text: '嗯，我带着 Melona 过来。', time: '2026-10-25T11:23:00' },
    { id: 'sh-8', sender: 'them', text: '你这点倒是挺会想。', time: '2026-10-25T11:23:20' },
    { id: 'sh-9', sender: 'me', text: '我直接进你房间，给你放桌上。', time: '2026-10-25T11:23:50' },
    { id: 'sh-10', sender: 'them', text: '好，房间里等你。', time: '2026-10-25T11:24:00' },
    { id: 'sh-11', sender: 'me', text: '我一会儿就到。', time: '2026-10-25T11:24:30' },
    { id: 'sh-12', sender: 'them', text: '好。', time: '2026-10-25T11:25:00' },
    { id: 'sh-13', sender: 'me', text: '我到了。', time: '2026-10-25T11:25:40' },
    { id: 'sh-14', sender: 'them', text: '还挺快的。', time: '2026-10-25T11:26:00' },
    { id: 'sh-15', sender: 'me', text: '我把 Melona 放桌上了。', time: '2026-10-25T11:26:30' },
    { id: 'sh-16', sender: 'them', text: '谢谢。', time: '2026-10-25T11:27:00' },
    { id: 'sh-17', sender: 'me', text: '你先吃，别站着。', time: '2026-10-25T11:27:20' },
    { id: 'sh-18', sender: 'them', text: '我就坐这儿，和你一起吃。', time: '2026-10-25T11:28:00' },
    { id: 'sh-19', sender: 'me', text: '好，坐着吃吧。', time: '2026-10-25T11:28:20' },
    { id: 'sh-20', sender: 'them', text: '还行。', time: '2026-10-25T11:40:00' },
    { id: 'sh-21', sender: 'me', text: '你别一口气吃完。', time: '2026-10-25T11:41:00' },
    { id: 'sh-22', sender: 'them', text: '我知道。', time: '2026-10-25T11:41:30' },
    { id: 'sh-23', sender: 'me', text: '你今天也别一直窝在房间里。', time: '2026-10-25T11:42:00' },
    { id: 'sh-24', sender: 'them', text: '你刚过来就催我出去。', time: '2026-10-25T11:42:20' },
    { id: 'sh-25', sender: 'me', text: '我没催你，我只是想你别一直坐着。', time: '2026-10-25T11:43:00' },
    { id: 'sh-26', sender: 'them', text: '那我先吃这个。', time: '2026-10-25T11:43:40' },
    { id: 'sh-27', sender: 'me', text: '好，吃完我们再聊。', time: '2026-10-25T11:44:00' },
    { id: 'sh-28', sender: 'them', text: '你今天怎么突然这么会说话。', time: '2026-10-25T14:10:30' },
    { id: 'sh-29', sender: 'me', text: '因为你在。', time: '2026-10-25T14:11:00' },
    { id: 'sh-30', sender: 'them', text: '你别笑。', time: '2026-10-25T14:12:00' },
    { id: 'sh-31', sender: 'me', text: '我没笑。', time: '2026-10-25T14:12:20' },
    { id: 'sh-32', sender: 'them', text: '今天去喝咖啡吗', time: '2026-10-25T18:14:00' },
    { id: 'sh-33', sender: 'me', text: '你怎么突然想喝咖啡', time: '2026-10-25T18:14:40' },
    { id: 'sh-34', sender: 'them', text: '最近发现一家新的。', time: '2026-10-25T18:15:00' },
    { id: 'sh-35', sender: 'them', text: '我想跟你一起去。', time: '2026-10-25T18:15:10' },
    { id: 'sh-36', sender: 'me', text: '好啊ㅋㅋ', time: '2026-10-25T18:15:30' },
    { id: 'sh-37', sender: 'them', text: '那我找一下地址。', time: '2026-10-25T18:16:00' },
    { id: 'sh-38', sender: 'me', text: '你已经开始找了？', time: '2026-10-25T18:16:30' },
    { id: 'sh-39', sender: 'them', text: '嗯。', time: '2026-10-25T18:17:00' },
    { id: 'sh-40', sender: 'me', text: 'ㅋㅋㅋㅋ怎么这么积极', time: '2026-10-25T18:17:30' },
    { id: 'sh-41', sender: 'them', text: '因为想跟你去啊。', time: '2026-10-25T18:18:00' },
    { id: 'sh-42', sender: 'me', text: '你还挺会安排。', time: '2026-10-25T18:18:20' },
    { id: 'sh-43', sender: 'them', text: '我想给你拍几张。', time: '2026-10-25T18:19:00' },
    { id: 'sh-44', sender: 'them', text: '你想拍我哪种？', time: '2026-10-25T18:19:30' },
    { id: 'sh-45', sender: 'me', text: '你坐在窗边那种。', time: '2026-10-25T18:20:00' },
    { id: 'sh-46', sender: 'them', text: '那你也得让我拍你几张。', time: '2026-10-25T18:20:30' },
    { id: 'sh-47', sender: 'me', text: '我也会配合你。', time: '2026-10-25T18:21:00' },
    { id: 'sh-48', sender: 'them', text: '我还想看看你拍出来的样子。', time: '2026-10-25T18:21:30' },
    { id: 'sh-49', sender: 'me', text: '你这么一说，反而更像你想赢。', time: '2026-10-25T18:22:00' },
    { id: 'sh-50', sender: 'them', text: '你这句我听得出你很自信。', time: '2026-10-25T18:22:30' },
    { id: 'sh-51', sender: 'me', text: '因为我真的觉得我给你拍的更自然。', time: '2026-10-25T18:23:00' },
    { id: 'sh-52', sender: 'them', text: '我也觉得我给你拍的更好看。', time: '2026-10-25T18:23:30' },
    { id: 'sh-53', sender: 'me', text: '我看完你给我拍的，也觉得挺好，但我还是觉得我那张更好看。', time: '2026-10-25T18:24:00' },
    { id: 'sh-54', sender: 'them', text: '你这话太巧了。', time: '2026-10-25T18:24:30' },
    { id: 'sh-55', sender: 'me', text: '我说的是事实。你拿角度和灯光都比我认真。', time: '2026-10-25T18:25:00' },
    { id: 'sh-56', sender: 'them', text: '那就让照片说话。', time: '2026-10-25T18:25:30' },
    { id: 'sh-57', sender: 'me', text: '好，你先把你最满意的那张发给我。', time: '2026-10-25T18:26:00' },
    { id: 'sh-58', sender: 'them', text: '我也想看你最满意的那张。', time: '2026-10-25T18:26:30' },
    { id: 'sh-59', sender: 'me', text: '行，互相看看。', time: '2026-10-25T18:27:00' },
    { id: 'sh-60', sender: 'them', text: '这样比较公平。', time: '2026-10-25T18:27:30' },
    { id: 'sh-61', sender: 'me', text: '你别一边说我拍得好，一边自己拿照片打脸。', time: '2026-10-25T18:28:00' },
    { id: 'sh-62', sender: 'them', text: '我这辈子不敢说你拍得不行。', time: '2026-10-25T18:28:30' },
    { id: 'sh-63', sender: 'me', text: '那你就等着看照片。', time: '2026-10-25T18:29:00' },
    { id: 'sh-64', sender: 'them', text: '好，先看你最好的那张。', time: '2026-10-25T18:35:00' },
    { id: 'sh-65', sender: 'me', text: '你看完之后再说我拍得不行。', time: '2026-10-25T18:35:30' },
    { id: 'sh-66', sender: 'them', text: '我不敢。', time: '2026-10-25T18:36:00' },
    { id: 'sh-67', sender: 'me', text: '那就看你拍出来的东西能不能比我更好。', time: '2026-10-25T18:36:30' },
    { id: 'sh-68', sender: 'them', text: '那就等照片出来。', time: '2026-10-25T18:37:00' },
    { id: 'sh-69', sender: 'me', text: '行，照片说话。', time: '2026-10-25T18:37:30' },
    { id: 'sh-70', sender: 'them', text: '今天打 LOL 吗', time: '2026-10-25T19:14:00' },
    { id: 'sh-71', sender: 'me', text: '可以啊', time: '2026-10-25T19:14:20' },
    { id: 'sh-72', sender: 'them', text: '好，我等你。', time: '2026-10-25T19:15:00' },
    { id: 'sh-73', sender: 'me', text: '你今天这么早就想打？', time: '2026-10-25T19:15:30' },
    { id: 'sh-74', sender: 'them', text: '嗯，想跟你玩。', time: '2026-10-25T19:16:00' },
    { id: 'sh-75', sender: 'me', text: 'ㅋㅋㅋㅋ知道啦', time: '2026-10-25T19:16:40' },
    { id: 'sh-76', sender: 'them', text: '那你快点。', time: '2026-10-25T19:17:00' },
    { id: 'sh-77', sender: 'me', text: '催什么！', time: '2026-10-25T19:17:30' },
    { id: 'sh-78', sender: 'them', text: '没有催你ㅋㅋ', time: '2026-10-25T19:18:00' },
    { id: 'sh-79', sender: 'me', text: '你一说就觉得你在催。', time: '2026-10-25T19:18:30' },
    { id: 'sh-80', sender: 'them', text: '我只是想和你一起打。', time: '2026-10-25T19:19:00' },
    { id: 'sh-81', sender: 'me', text: '那就快点上线。', time: '2026-10-25T19:19:30' },
    { id: 'sh-82', sender: 'them', text: '我在上了。', time: '2026-10-25T19:20:00' },
    { id: 'sh-83', sender: 'me', text: '好。', time: '2026-10-25T19:20:20' }
  ],
  Niki: [
    { id: 'ni-1', sender: 'them', text: '你今天状态还行吗？练习前我想确认一下，不然一开始就上头了。', time: '2026-10-25T18:30:00' },
    { id: 'ni-2', sender: 'me', text: '还行，今天睡得不错。只是有点紧张，怕自己一到动作会乱。', time: '2026-10-25T18:32:00' },
    { id: 'ni-3', sender: 'them', text: '你太想把每个动作都做到最好了，所以才会紧张。别想太多，慢一点就行。', time: '2026-10-25T18:35:00' },
    { id: 'ni-4', sender: 'me', text: '我知道，但总觉得自己不够稳。', time: '2026-10-25T18:35:00' },
    { id: 'ni-5', sender: 'them', text: '哥，要加油哦！你真的已经进步很多了，今天放轻松一点就好。', time: '2026-10-25T18:38:00' },
    { id: 'ni-6', sender: 'me', text: '嗯，我知道。你说得对，别想太多，先把节奏定住。', time: '2026-10-25T18:39:00' },
    { id: 'ni-7', sender: 'them', text: '对，今天就按节奏来。你别急着做完所有动作，先稳住最关键的几步。', time: '2026-10-25T18:40:00' },
    { id: 'ni-8', sender: 'me', text: '好，今天我就按你说的慢一点。你也别太担心我，没事的。', time: '2026-10-25T18:42:00' },
    { id: 'ni-9', sender: 'them', text: '行，我在旁边看着你。你一旦有卡住的地方，我就提醒你。', time: '2026-10-25T18:44:00' },
    { id: 'ni-10', sender: 'me', text: '那就谢谢你了，感觉今天会顺不少。', time: '2026-10-25T18:46:00' }
  ],
  Jay: [
    { id: 'ja-1', sender: 'them', text: '你今天有点闷闷的，准备干什么？', time: '2026-10-24T20:12:00' },
    { id: 'ja-2', sender: 'me', text: '我在想今天晚上是不是出去走走，散散心。😶', time: '2026-10-24T20:14:00' },
    { id: 'ja-3', sender: 'them', text: '那正好，走走也能缓解。你吃不吃雪糕？🍦', time: '2026-10-24T20:16:00' },
    { id: 'ja-4', sender: 'me', text: '吃啊，最近工作有点累，吃个雪糕挺舒服的。你想去哪家？', time: '2026-10-24T20:18:00' },
    { id: 'ja-5', sender: 'them', text: '我想去那家草莓味的，甜甜的很适合今天😂', time: '2026-10-24T20:19:00' },
    { id: 'ja-6', sender: 'me', text: '那我也来！我要草莓加巧克力的那种，哈哈😆', time: '2026-10-24T20:20:00' },
    { id: 'ja-7', sender: 'them', text: '好，明明是你先提出来的，结果又让我负责选口味，真有你的。', time: '2026-10-24T20:21:00' },
    { id: 'ja-8', sender: 'me', text: '那你就别抱怨，我也想吃啊，今天就算你买单吧。', time: '2026-10-24T20:24:00' },
    { id: 'ja-9', sender: 'them', text: '行行行，吃完雪糕你还要把我说的那些歌单听一遍，别推脱。', time: '2026-10-24T20:26:00' },
    { id: 'ja-10', sender: 'me', text: '好，我答应你。今天的雪糕和歌单都安排上了。', time: '2026-10-24T20:27:00' }
  ],
  Jungwon: [
    { id: 'jw-1', sender: 'them', text: '今天这边有点忙，晚上直播前我还得忙一下设备，顺便看看行李有没有漏东西。', time: '2026-10-23T14:08:00' },
    { id: 'jw-2', sender: 'me', text: '嗯，别太累，节目和行李都安排好了吗？', time: '2026-10-23T14:10:00' },
    { id: 'jw-3', sender: 'them', text: '差不多了，今天只是简单收一下东西，你别担心。你最近也忙，我怕你一整天都在赶。', time: '2026-10-23T14:12:00' },
    { id: 'jw-4', sender: 'me', text: '我还行，反正也就收拾东西和看看行程。你别把自己搞得太累。', time: '2026-10-23T14:16:00' },
    { id: 'jw-5', sender: 'them', text: '哈哈，知道了。对了，今天晚上我们一起吃个饭吧，吃完再回宿舍整理行李。', time: '2026-10-23T14:18:00' },
    { id: 'jw-6', sender: 'me', text: '好啊，吃什么？我这边没意见，反正饿了。', time: '2026-10-23T14:20:00' },
    { id: 'jw-7', sender: 'them', text: '那就随便选一家，能吃得舒服点就行。吃完我再提醒大家集合。', time: '2026-10-23T14:22:00' },
    { id: 'jw-8', sender: 'me', text: '行，临出发前先吃个痛快哈哈。', time: '2026-10-23T14:24:00' },
    { id: 'jw-9', sender: 'them', text: '对对，明天下午 3 点在宿舍楼下集合，3 点半上车去机场，大家别迟到ㅋㅋ', time: '2026-10-23T14:26:00' },
    { id: 'jw-10', sender: 'me', text: '收到ㅋㅋ 你快去准备直播吧，我会记得注意音量。', time: '2026-10-23T14:28:00' },
    { id: 'jw-11', sender: 'them', text: '哥，我要开始直播咯！记得注意音量ㅋㅋ', time: '2026-10-23T14:30:00' },
    { id: 'jw-12', sender: 'me', text: '知道啦ㅋㅋ 你快去，别急着说话，先调好声音。', time: '2026-10-23T14:31:00' }
  ],
  Sunoo: [
    { id: 'sn-1', sender: 'me', text: 'Sunoo 呀，要保护好你的手臂痣。', time: '2026-10-22T22:04:00' },
    { id: 'sn-2', sender: 'them', text: '你怎么又开始盯这个了？我真的不想每次都被你提醒到这种细节。😩', time: '2026-10-22T22:05:00' },
    { id: 'sn-3', sender: 'me', text: '因为我担心你，怎么会不提醒你？你最近总在动手臂，记得别抓到。', time: '2026-10-22T22:08:00' },
    { id: 'sn-4', sender: 'them', text: '你这是在像老妈一样管我啊，真的很无奈。', time: '2026-10-22T22:09:00' },
    { id: 'sn-5', sender: 'me', text: '我只是担心你。你别拿我当外人，至少我是真的关心你。', time: '2026-10-22T22:12:00' },
    { id: 'sn-6', sender: 'them', text: '知道了，我懂。只是你每次提醒都这么认真，我真的无奈得想笑。😵', time: '2026-10-22T22:14:00' },
    { id: 'sn-7', sender: 'me', text: '那你就别生气，等你恢复得更好一点，我再给你讲一个更好玩的事情。', time: '2026-10-22T22:16:00' },
    { id: 'sn-8', sender: 'them', text: '好吧，我先接受你这条提醒。下次别再把我的手臂痣当成世界级事件了。', time: '2026-10-22T22:18:00' }
  ],
  '不要退群❌': [
    { id: 'group-1', sender: 'them', text: '大家明天一起吃饭吧！出发前先好好补一顿，别临时饿着。', time: '2026-10-25T18:10:00' },
    { id: 'group-2', sender: 'me', text: '好啊，吃什么？我都行，随便安排。', time: '2026-10-25T18:11:00' },
    { id: 'group-3', sender: 'them', text: '那就去那家烧烤店吧，大家都能吃得开心一点ㅋㅋ😂', time: '2026-10-25T18:12:00' },
    { id: 'group-4', sender: 'me', text: '我赞成，吃完再回宿舍收行李，比较稳。', time: '2026-10-25T18:14:00' },
    { id: 'group-5', sender: 'them', text: '那就定了。明天 3 点在宿舍楼下集合，3 点半上车去机场，大家不要迟到。', time: '2026-10-25T18:16:00' },
    { id: 'group-6', sender: 'them', text: '别忘了带证件、充电宝和口罩，赶飞机的节奏不能乱。', time: '2026-10-25T18:16:30' },
    { id: 'group-7', sender: 'them', text: '我会提前提醒一次，行李和证件都带好，别忘了。', time: '2026-10-25T18:18:00' },
    { id: 'group-8', sender: 'them', text: '我现在最担心的是有人临时把登机牌忘在宿舍里 😂', time: '2026-10-25T18:19:00' },
    { id: 'group-9', sender: 'them', text: '别急着拖延了，明天早一点吃完就去集合，最后一次提醒了ㅋㅋ', time: '2026-10-25T18:21:00' },
    { id: 'group-10', sender: 'me', text: '收到，明天我会按时到的。', time: '2026-10-25T18:24:00' }
  ]
};

const DEFAULT_X_POSTS = [
  {
    id: 'x-1',
    user: 'Sydney Morning',
    handle: '@sydmorning',
    avatar: 'S',
    time: '2分钟',
    text: '澳大利亚东海岸的晴朗天气持续拉升了周末出游热度，海滩、咖啡厅和城市步道都涌入了不少游客。',
    image: 'qh9.jpg',
    replies: 186,
    retweets: 72,
    likes: 1430,
    bookmarked: false,
    liked: false,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #bfd7ff, #5eb0ff)'
  },
  {
    id: 'x-2',
    user: 'Australia Now',
    handle: '@australianow',
    avatar: 'A',
    time: '14分钟',
    text: '当地社区组织正在推动为待领养的宠物筹集粮食和清洁用品，很多志愿者在周末继续参与整理和发放工作。',
    image: 'qh10.jpg',
    replies: 94,
    retweets: 41,
    likes: 820,
    bookmarked: true,
    liked: false,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #f9d6c6, #d57070)'
  },
  {
    id: 'x-3',
    user: 'City Notes',
    handle: '@citynotes',
    avatar: 'C',
    time: '38分钟',
    text: '清晨的城市空气和微风让人忍不住慢下来。街角的早餐店排起了队，大家都在享受一段安静而舒服的周末时光。',
    image: 'qh2.jpg',
    replies: 68,
    retweets: 23,
    likes: 540,
    bookmarked: false,
    liked: true,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #7dd3fc, #1d4ed8)'
  },
  {
    id: 'x-4',
    user: 'Maya in Melbourne',
    handle: '@mya.mel',
    avatar: 'M',
    time: '1小时',
    text: '周末去了一家宠物友好咖啡馆，几只小狗一边等咖啡一边认真看着店员，活像一群小明星。',
    image: 'qh3.jpg',
    replies: 113,
    retweets: 43,
    likes: 990,
    bookmarked: false,
    liked: false,
    retweeted: true,
    userColor: 'linear-gradient(135deg, #f7d9a6, #f17d82)'
  },
  {
    id: 'x-5',
    user: 'City Notes',
    handle: '@citynotes',
    avatar: 'C',
    time: '2小时',
    text: '雨后街头的彩色伞和暖色灯光，总会让平凡的一天突然变得更有故事感。',
    image: '',
    replies: 41,
    retweets: 16,
    likes: 480,
    bookmarked: false,
    liked: false,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #d9f99d, #4ade80)'
  },
  {
    id: 'x-6',
    user: 'Pup Club Australia',
    handle: '@pupclubau',
    avatar: 'P',
    time: '3小时',
    text: '本地收养站正在筹备一批寄养所需物资，大家热心捐赠毛巾、零食和清洁用品，希望更多小动物能尽快找到新家。',
    image: 'qh4.jpg',
    replies: 72,
    retweets: 58,
    likes: 1460,
    bookmarked: false,
    liked: true,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #fed7aa, #f97316)'
  },
  {
    id: 'x-7',
    user: 'Yonhap News',
    handle: '@yonhapnews',
    avatar: 'Y',
    time: '27分钟',
    text: 'Justin Bieber arrived in Seoul on Oct. 23, marking his first visit to South Korea in about 13 years. According to Yonhap News, the singer shared social media updates after landing and drew attention during his stop near Seongsu, including brief activity around the Skylrk pop-up. Source: Yonhap, Oct 23, 2026. #JustinBieber #JB #Seoul',
    image: '',
    replies: 382,
    retweets: 164,
    likes: 7030,
    bookmarked: false,
    liked: false,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #c4b5fd, #7c3aed)'
  },
  {
    id: 'x-8',
    user: 'JB Update',
    handle: '@jbupdate',
    avatar: 'J',
    time: '48分钟',
    text: 'Music fans are closely watching Justin Bieber’s recent public activity after his Seoul stop, with renewed attention on his performance schedule and social media posts. No official release date has been announced, but his recent appearances continue to trend across fan communities and entertainment coverage. #JustinBieber #MusicNews',
    image: '',
    replies: 205,
    retweets: 96,
    likes: 4260,
    bookmarked: false,
    liked: false,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #a7f3d0, #14b8a6)'
  },
  {
    id: 'x-9',
    user: 'Hailey Watch',
    handle: '@haileywatch',
    avatar: 'H',
    time: '1小时',
    text: 'Fans are discussing Justin Bieber and Hailey Bieber’s recent public-facing moments after the singer’s Seoul visit. Social media conversation is active, but this is fan discussion rather than a confirmed report. #HaileyBieber #JustinBieber',
    image: '',
    replies: 131,
    retweets: 58,
    likes: 2894,
    bookmarked: false,
    liked: false,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #fcd6d6, #ec4899)'
  },
  {
    id: 'x-10',
    user: 'Dispatch Watch',
    handle: '@dispatchwatch',
    avatar: 'D',
    time: '1小时 20分钟',
    text: '模拟娱乐资讯：韩娱圈继续聚焦艺人公开活动、合作消息和新作品宣传。相关消息多来自公开公开资料和艺人社交平台更新，仍需以官方确认信息为准。 #Dispatch #KpopNews #KoreanEntertainment',
    image: '',
    replies: 89,
    retweets: 44,
    likes: 2175,
    bookmarked: false,
    liked: false,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #fef3c7, #f59e0b)'
  },
  {
    id: 'x-11',
    user: 'Korean Star Watch',
    handle: '@kstarwatch',
    avatar: 'K',
    time: '2小时',
    text: '模拟娱乐资讯：K-pop团体与演员的公开活动、见面会及宣传安排继续受到关注，粉丝讨论热点集中在新作品宣传节奏与艺人公开动态。 #KoreanEntertainment #KpopNews #Dispatch',
    image: '',
    replies: 64,
    retweets: 31,
    likes: 1988,
    bookmarked: false,
    liked: false,
    retweeted: false,
    userColor: 'linear-gradient(135deg, #bfdbfe, #2563eb)'
  }
];

const DEFAULT_MUSINSA_PRODUCTS = [
  {
    id: 'musinsa-puffer-1',
    name: '黑色羽绒服',
    category: 'outerwear',
    price: 69900,
    colors: ['黑色'],
    sizes: ['S', 'M', 'L'],
    image: 'black-puffer.jpeg',
    tag: 'HOT',
    description: '轻盈保暖的羽绒服，适合日常通勤和外出穿搭。'
  },
  {
    id: 'musinsa-jeans-1',
    name: '宽松直筒牛仔裤',
    category: 'pants',
    price: 39800,
    colors: ['蓝色牛仔', '黑色'],
    sizes: ['S', 'M', 'L'],
    image: 'jeans.jpeg',
    tag: 'BEST',
    description: '宽松直筒版型，适合日常穿搭和轻松休闲风。'
  },
  {
    id: 'musinsa-hoodie-1',
    name: '灰色宽松连帽卫衣',
    category: 'hoodie',
    price: 45900,
    colors: ['灰色', '黑色'],
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    tag: 'NEW',
    description: '简约休闲款，适合轻松 layering 的韩系街头穿搭。'
  },
  {
    id: 'musinsa-jacket-1',
    name: '灰色拉链卫衣外套',
    category: 'outerwear',
    price: 52900,
    colors: ['灰色', '米色'],
    sizes: ['S', 'M', 'L'],
    image: 'grey-outerwear.jpeg',
    tag: 'HOT',
    description: '轻盈基础外套，适合过渡季和日常叠穿。'
  },
  {
    id: 'musinsa-cap-1',
    name: '黑色基础款棒球帽',
    category: 'caps',
    price: 19800,
    colors: ['黑色', '白色'],
    sizes: ['ONE'],
    image: 'black-cap.jpeg',
    tag: 'BASIC',
    description: '简洁百搭的基础款棒球帽，适合日常通勤搭配。'
  },
  {
    id: 'musinsa-cap-2',
    name: '粉色棒球帽',
    category: 'caps',
    price: 21900,
    colors: ['粉色', '灰色'],
    sizes: ['ONE'],
    image: 'pink-cap.jpeg',
    tag: 'NEW',
    description: '鲜明色彩的日系休闲帽，高饱和度搭配更有氛围。'
  },
  {
    id: 'musinsa-cap-3',
    name: '深蓝色棒球帽',
    category: 'caps',
    price: 22400,
    colors: ['深蓝色', '军绿色'],
    sizes: ['ONE'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    tag: 'TREND',
    description: '深色系视觉有层次感，适合秋冬日常穿搭。'
  },
  {
    id: 'musinsa-cap-4',
    name: '牛仔色字母棒球帽',
    category: 'caps',
    price: 23800,
    colors: ['牛仔色', '米色'],
    sizes: ['ONE'],
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    tag: 'LIMIT',
    description: '带有字母细节的休闲棒球帽，适合街头感穿搭。'
  },
  {
    id: 'musinsa-top-1',
    name: '基础简约上衣',
    category: 'top',
    price: 32900,
    colors: ['白色', '黑色', '米色'],
    sizes: ['XS', 'S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
    tag: 'BASIC',
    description: '高品质基础款，版型舒适，适合层层穿搭。'
  },
  {
    id: 'musinsa-hoodie-2',
    name: '灰色连帽卫衣',
    category: 'hoodie',
    price: 48900,
    colors: ['灰色', '白色'],
    sizes: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    tag: 'SALE',
    description: '简约有型的连帽卫衣，温暖又轻便。'
  }
];

function normalizeAssetPath(imagePath) {
  if (!imagePath) {
    return '';
  }

  if (/^https?:\/\//.test(imagePath) || imagePath.startsWith('data:')) {
    return imagePath;
  }

  const trimmed = imagePath.replace(/^\.?\//, '').replace(/^\//, '');
  if (!trimmed || trimmed === '.') {
    return './';
  }

  return `./${trimmed}`;
}

[DEFAULT_X_POSTS, DEFAULT_MUSINSA_PRODUCTS].forEach((items) => {
  items.forEach((item) => {
    if (item.image) {
      item.image = normalizeAssetPath(item.image);
    }
  });
});

const DEFAULT_MUSINSA_STATE = {
  view: 'home',
  category: 'all',
  search: '',
  selectedId: 'musinsa-puffer-1',
  detailColor: '黑色',
  detailSize: 'M',
  cart: [
    { id: 'cart-1', productId: 'musinsa-puffer-1', color: '黑色', size: 'M', quantity: 1, selected: true },
    { id: 'cart-2', productId: 'musinsa-jacket-1', color: '灰色', size: 'L', quantity: 1, selected: true },
    { id: 'cart-3', productId: 'musinsa-cap-2', color: '粉色', size: 'ONE', quantity: 1, selected: true },
    { id: 'cart-4', productId: 'musinsa-jeans-1', color: '蓝色牛仔', size: 'M', quantity: 1, selected: true }
  ],
  wishlist: ['musinsa-cap-2', 'musinsa-top-1']
};

const DEFAULT_CALLS = [
  { id: 'call-sunghoon', name: 'Sunghoon', type: '받은 통화', time: '오늘 · 10:34', duration: '12분', badge: '받음' },
  { id: 'call-niki', name: 'Niki', type: '거절', time: '어제 · 19:14', duration: '없음', badge: '부재중' },
  { id: 'call-jay', name: 'Jay', type: '완료', time: '월요일 · 18:45', duration: '8분', badge: '완료' },
  { id: 'call-jungwon', name: 'Jungwon', type: '받은 통화', time: '일요일 · 08:11', duration: '5분', badge: '받음' },
  { id: 'call-sunoo', name: 'Sunoo', type: '완료', time: '토요일 · 21:09', duration: '11분', badge: '완료' },
  { id: 'call-dad', name: '爸爸', type: '발신', time: '금요일 · 15:30', duration: '6분', badge: '발신' },
  { id: 'call-mom', name: '妈妈', type: '받은 통화', time: '목요일 · 09:46', duration: '9분', badge: '받음' }
];

const state = {
  currentScreen: 'home',
  currentApp: 'kakao',
  kakaoView: 'list',
  kakaoChatId: 'Sunghoon',
  kakaoShouldAutoScroll: true,
  kakaoScrollPositions: {},
  xDetailId: null,
  xProfileUser: null,
  noteDetailId: null,
  noteQuery: '',
  kakaoChats: loadKakaoChats(),
  xPosts: loadXPosts(),
  notes: loadNotes(),
  musinsa: loadMusinsaState(),
  calls: DEFAULT_CALLS
};

const screens = {
  home: document.getElementById('screen-home'),
  lock: document.getElementById('screen-lock'),
  app: document.getElementById('screen-app')
};

const appTitle = document.getElementById('appTitle');
const appBody = document.getElementById('appBody');
const clockTime = document.getElementById('clockTime');
const lockTime = document.getElementById('lockTime');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function loadKakaoChats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.kakao);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.kakao, JSON.stringify(DEFAULT_KAKAO_CHATS));
      return structuredClone(DEFAULT_KAKAO_CHATS);
    }

    const parsed = JSON.parse(raw);
    const normalized = {};
    CONTACT_ORDER.forEach((name) => {
      const shouldForceDefault = name === 'Sunghoon' || name === 'Jungwon' || name === '不要退群❌';
      normalized[name] = shouldForceDefault
        ? structuredClone(DEFAULT_KAKAO_CHATS[name])
        : (Array.isArray(parsed[name]) && parsed[name].length ? parsed[name] : DEFAULT_KAKAO_CHATS[name]);
    });

    localStorage.setItem(STORAGE_KEYS.kakao, JSON.stringify(normalized));
    return normalized;
  } catch (error) {
    return structuredClone(DEFAULT_KAKAO_CHATS);
  }
}

function loadXPosts() {
  try {
    const normalizedDefaults = DEFAULT_X_POSTS.map((post) => ({
      ...post,
      image: normalizeAssetPath(post.image)
    }));

    const raw = localStorage.getItem(STORAGE_KEYS.x);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.x, JSON.stringify(normalizedDefaults));
      return structuredClone(normalizedDefaults);
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || !parsed.length) {
      localStorage.setItem(STORAGE_KEYS.x, JSON.stringify(normalizedDefaults));
      return structuredClone(normalizedDefaults);
    }

    const safeParsed = parsed.map((post) => ({
      ...post,
      image: normalizeAssetPath(post.image)
    }));

    const existingIds = new Set(safeParsed.map((post) => post.id));
    const merged = [...safeParsed];
    normalizedDefaults.forEach((post) => {
      if (!existingIds.has(post.id)) {
        merged.push(structuredClone(post));
      }
    });

    localStorage.setItem(STORAGE_KEYS.x, JSON.stringify(merged));
    return merged;
  } catch (error) {
    return structuredClone(DEFAULT_X_POSTS).map((post) => ({
      ...post,
      image: normalizeAssetPath(post.image)
    }));
  }
}

function loadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.notes);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(DEFAULT_NOTES));
      return structuredClone(DEFAULT_NOTES);
    }

    const parsed = JSON.parse(raw);
    const legacyTitles = ['优化首页交互状态', '补充应用切换动画', '修正屏幕返回逻辑', '整理相册素材和锁屏图'];
    const needsReset = Array.isArray(parsed) && parsed.some((note) => legacyTitles.includes(note.title));
    if (!Array.isArray(parsed) || !parsed.length || needsReset) {
      localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(DEFAULT_NOTES));
      return structuredClone(DEFAULT_NOTES);
    }
    return parsed;
  } catch (error) {
    return structuredClone(DEFAULT_NOTES);
  }
}

function persistKakaoChats() {
  localStorage.setItem(STORAGE_KEYS.kakao, JSON.stringify(state.kakaoChats));
}

function persistXPosts() {
  localStorage.setItem(STORAGE_KEYS.x, JSON.stringify(state.xPosts));
}

function persistNotes() {
  localStorage.setItem(STORAGE_KEYS.notes, JSON.stringify(state.notes));
}

function loadMusinsaState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.musinsa);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.musinsa, JSON.stringify(DEFAULT_MUSINSA_STATE));
      return structuredClone(DEFAULT_MUSINSA_STATE);
    }
    const parsed = JSON.parse(raw);
    const desiredCartProductIds = new Set(DEFAULT_MUSINSA_STATE.cart.map((item) => item.productId));
    const cart = Array.isArray(parsed.cart) && parsed.cart.length
      ? parsed.cart
      : structuredClone(DEFAULT_MUSINSA_STATE.cart);
    const normalizedCart = cart.length === DEFAULT_MUSINSA_STATE.cart.length && cart.every((item) => item && desiredCartProductIds.has(item.productId))
      ? cart
      : structuredClone(DEFAULT_MUSINSA_STATE.cart);

    return {
      ...structuredClone(DEFAULT_MUSINSA_STATE),
      ...parsed,
      cart: normalizedCart,
      wishlist: Array.isArray(parsed.wishlist) ? parsed.wishlist : structuredClone(DEFAULT_MUSINSA_STATE.wishlist)
    };
  } catch (error) {
    return structuredClone(DEFAULT_MUSINSA_STATE);
  }
}

function persistMusinsaState() {
  localStorage.setItem(STORAGE_KEYS.musinsa, JSON.stringify(state.musinsa));
}

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false });
  const dateString = now.toLocaleDateString('zh-CN', { weekday: 'short', month: 'long', day: 'numeric' });
  const formatted = timeString.replace(/^0/, '').replace(/\s/g, '');
  clockTime.textContent = formatted;
  lockTime.textContent = formatted;
  document.getElementById('lockDate').textContent = dateString.replace('星期', '周');
}

function setScreen(screenName) {
  state.currentScreen = screenName;
  Object.entries(screens).forEach(([name, el]) => {
    el.classList.toggle('active', name === screenName);
  });
}

function openApp(appId) {
  if (!appId || !['kakao', 'x', 'musinsa', 'photos', 'notes', 'calls', 'contacts', 'files', 'settings'].includes(appId)) {
    return;
  }

  state.currentApp = appId;
  if (appId === 'kakao') {
    state.kakaoView = 'list';
    state.kakaoChatId = 'Sunghoon';
  }
  if (appId === 'x') {
    state.xDetailId = null;
    state.xProfileUser = null;
  }
  if (appId === 'notes') {
    state.noteDetailId = null;
  }
  if (appId === 'musinsa') {
    state.musinsa.view = 'home';
  }
  renderApp();
  setScreen('app');
}

function syncKakaoChatScroll({ force = false } = {}) {
  if (state.currentApp !== 'kakao' || state.kakaoView !== 'chat') {
    return;
  }

  const body = appBody.querySelector('.kakao-chat-body');
  if (!body) {
    return;
  }

  if (force || state.kakaoShouldAutoScroll !== false) {
    body.scrollTop = body.scrollHeight;
    state.kakaoScrollPositions[state.kakaoChatId] = body.scrollHeight;
    state.kakaoShouldAutoScroll = true;
    return;
  }

  if (typeof state.kakaoScrollPositions[state.kakaoChatId] === 'number') {
    body.scrollTop = state.kakaoScrollPositions[state.kakaoChatId];
  }
}

function handleKakaoChatScroll(event) {
  const body = event.target.closest('.kakao-chat-body');
  if (!body) {
    return;
  }

  const distanceFromBottom = body.scrollHeight - body.scrollTop - body.clientHeight;
  state.kakaoScrollPositions[state.kakaoChatId] = body.scrollTop;
  state.kakaoShouldAutoScroll = distanceFromBottom <= 20;
}

function renderApp() {
  const appMap = {
    kakao: renderKakaoApp,
    x: renderXApp,
    musinsa: renderMusinsaApp,
    photos: renderPhotosApp,
    notes: renderNotesApp,
    calls: renderCallsApp,
    contacts: renderContactsApp,
    files: renderFilesApp,
    settings: renderSettingsApp
  };

  const titleMap = {
    kakao: 'KakaoTalk',
    x: 'X',
    musinsa: 'MUSINSA',
    photos: '相册',
    notes: '备忘录',
    calls: '通话记录',
    contacts: '联系人',
    files: '文件管理',
    settings: '设置'
  };

  appTitle.textContent = titleMap[state.currentApp] || '应用';
  appBody.innerHTML = appMap[state.currentApp] ? appMap[state.currentApp]() : '';

  const chatBody = appBody.querySelector('.kakao-chat-body');
  if (chatBody) {
    chatBody.addEventListener('scroll', handleKakaoChatScroll, { passive: true });
  }

  requestAnimationFrame(() => {
    syncKakaoChatScroll({ force: state.kakaoShouldAutoScroll !== false });
  });

  document.querySelectorAll('.dock-item').forEach((item) => {
    item.classList.toggle('active', item.dataset.app === state.currentApp);
  });
}

function handleAction(action, dataset = {}) {
  if (action === 'lock') {
    setScreen('lock');
    return;
  }

  if (action === 'unlock') {
    setScreen('home');
    return;
  }

  if (action === 'back') {
    if (state.currentApp === 'kakao' && state.kakaoView === 'chat') {
      state.kakaoView = 'list';
      renderApp();
      return;
    }
    if (state.currentApp === 'x' && state.xDetailId) {
      state.xDetailId = null;
      renderApp();
      return;
    }
    if (state.currentApp === 'notes' && state.noteDetailId) {
      state.noteDetailId = null;
      renderApp();
      return;
    }
    setScreen('home');
    return;
  }

  if (action === 'home') {
    setScreen('home');
    return;
  }

  if (action === 'musinsa-open-category') {
    state.musinsa.category = dataset.category || 'all';
    state.musinsa.view = 'home';
    renderApp();
    return;
  }

  if (action === 'musinsa-open-detail') {
    state.musinsa.selectedId = dataset.productId;
    const product = getMusinsaProductById(dataset.productId);
    if (product) {
      state.musinsa.detailColor = product.colors[0];
      state.musinsa.detailSize = product.sizes[0];
    }
    state.musinsa.view = 'detail';
    renderApp();
    return;
  }

  if (action === 'musinsa-back-home') {
    state.musinsa.view = 'home';
    renderApp();
    return;
  }

  if (action === 'musinsa-open-cart') {
    state.musinsa.view = 'cart';
    renderApp();
    return;
  }

  if (action === 'musinsa-open-wishlist') {
    state.musinsa.view = 'wishlist';
    renderApp();
    return;
  }

  if (action === 'musinsa-toggle-favorite') {
    const productId = dataset.productId;
    if (!productId) return;
    const exists = state.musinsa.wishlist.includes(productId);
    state.musinsa.wishlist = exists
      ? state.musinsa.wishlist.filter((id) => id !== productId)
      : [...state.musinsa.wishlist, productId];
    persistMusinsaState();
    renderApp();
    return;
  }

  if (action === 'musinsa-select-color') {
    state.musinsa.detailColor = dataset.color || state.musinsa.detailColor;
    renderApp();
    return;
  }

  if (action === 'musinsa-select-size') {
    state.musinsa.detailSize = dataset.size || state.musinsa.detailSize;
    renderApp();
    return;
  }

  if (action === 'musinsa-add-to-cart') {
    const productId = dataset.productId || state.musinsa.selectedId;
    const product = getMusinsaProductById(productId);
    if (!product) return;
    const color = dataset.color || state.musinsa.detailColor || product.colors[0];
    const size = dataset.size || state.musinsa.detailSize || product.sizes[0];
    const existing = state.musinsa.cart.find((item) => item.productId === productId && item.color === color && item.size === size);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.musinsa.cart.push({
        id: `cart-${Date.now()}`,
        productId,
        color,
        size,
        quantity: 1,
        selected: true
      });
    }
    persistMusinsaState();
    renderApp();
    return;
  }

  if (action === 'musinsa-inc-cart') {
    const itemId = dataset.itemId;
    const item = state.musinsa.cart.find((entry) => entry.id === itemId);
    if (!item) return;
    item.quantity += 1;
    persistMusinsaState();
    renderApp();
    return;
  }

  if (action === 'musinsa-dec-cart') {
    const itemId = dataset.itemId;
    const item = state.musinsa.cart.find((entry) => entry.id === itemId);
    if (!item) return;
    item.quantity -= 1;
    if (item.quantity <= 0) {
      state.musinsa.cart = state.musinsa.cart.filter((entry) => entry.id !== itemId);
    }
    persistMusinsaState();
    renderApp();
    return;
  }

  if (action === 'musinsa-remove-cart') {
    state.musinsa.cart = state.musinsa.cart.filter((entry) => entry.id !== dataset.itemId);
    persistMusinsaState();
    renderApp();
    return;
  }

  if (action === 'musinsa-toggle-cart-select') {
    const item = state.musinsa.cart.find((entry) => entry.id === dataset.itemId);
    if (!item) return;
    item.selected = !item.selected;
    persistMusinsaState();
    renderApp();
    return;
  }

  if (action === 'open-kakao-chat') {
    state.kakaoChatId = dataset.contactId || 'Sunghoon';
    state.kakaoView = 'chat';
    state.kakaoShouldAutoScroll = true;
    renderApp();
    return;
  }

  if (action === 'close-kakao') {
    state.kakaoView = 'list';
    renderApp();
    return;
  }

  if (action === 'toggle-kakao-profile') {
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
      profileCard.hidden = !profileCard.hidden;
    }
    return;
  }

  if (action === 'open-x-post') {
    state.xDetailId = dataset.postId;
    renderApp();
    return;
  }

  if (action === 'open-x-profile') {
    state.xProfileUser = dataset.userName || null;
    renderApp();
    return;
  }

  if (action === 'close-x-detail') {
    state.xDetailId = null;
    state.xProfileUser = null;
    renderApp();
    return;
  }

  if (action === 'toggle-like') {
    const post = state.xPosts.find((item) => item.id === dataset.postId);
    if (!post) return;
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    persistXPosts();
    renderApp();
    return;
  }

  if (action === 'toggle-retweet') {
    const post = state.xPosts.find((item) => item.id === dataset.postId);
    if (!post) return;
    post.retweeted = !post.retweeted;
    post.retweets += post.retweeted ? 1 : -1;
    persistXPosts();
    renderApp();
    return;
  }

  if (action === 'toggle-bookmark') {
    const post = state.xPosts.find((item) => item.id === dataset.postId);
    if (!post) return;
    post.bookmarked = !post.bookmarked;
    persistXPosts();
    renderApp();
    return;
  }

  if (action === 'open-note') {
    state.noteDetailId = dataset.noteId;
    renderApp();
    return;
  }

  if (action === 'create-note') {
    const title = prompt('新建备忘录标题', '新备忘录');
    if (!title || !title.trim()) return;
    const newNote = {
      id: `note-${Date.now()}`,
      title: title.trim(),
      content: '新建备忘录内容...',
      updatedAt: new Date().toISOString()
    };
    state.notes.unshift(newNote);
    state.noteDetailId = newNote.id;
    persistNotes();
    renderApp();
    return;
  }

  if (action === 'delete-note') {
    const noteId = dataset.noteId;
    state.notes = state.notes.filter((note) => note.id !== noteId);
    if (state.noteDetailId === noteId) state.noteDetailId = null;
    persistNotes();
    renderApp();
    return;
  }

  if (action === 'save-note') {
    const note = state.notes.find((item) => item.id === dataset.noteId);
    if (!note) return;
    const titleInput = document.querySelector('#note-title-input');
    const contentInput = document.querySelector('#note-content-input');
    if (titleInput) note.title = titleInput.value.trim() || note.title;
    if (contentInput) note.content = contentInput.value.trim();
    note.updatedAt = new Date().toISOString();
    persistNotes();
    renderApp();
    return;
  }
}

function renderKakaoApp() {
  if (state.kakaoView === 'chat') {
    return renderKakaoChat();
  }

  const listHtml = CONTACT_ORDER.map((name) => {
    const messages = state.kakaoChats[name] || [];
    const latest = messages[messages.length - 1] || { text: '消息', time: new Date().toISOString() };
    const unread = messages.filter((msg) => msg.sender === 'them').length;
    const isActive = name === state.kakaoChatId;

    return `
      <button class="kakao-chat-item ${isActive ? 'active' : ''}" type="button" data-action="open-kakao-chat" data-contact-id="${name}">
        <div class="kakao-avatar ${CONTACT_META[name].avatarClass}">${CONTACT_META[name].initials}</div>
        <div class="kakao-info">
          <div class="kakao-line">
            <span class="kakao-name">${name}</span>
            <span class="kakao-time">${formatShortMessageTime(latest.time)}</span>
          </div>
          <div class="kakao-preview-row">
            <span class="kakao-preview">${escapeHtml(latest.text)}</span>
            ${unread ? `<span class="kakao-unread">${Math.min(unread, 99)}</span>` : ''}
          </div>
        </div>
      </button>
    `;
  }).join('');

  return `
    <div class="kakao-app">
      <div class="kakao-topbar">
        <div class="kakao-title">KakaoTalk</div>
        <div class="kakao-actions">
          <span>⌕</span>
          <span>＋</span>
        </div>
      </div>
      <div class="kakao-list">${listHtml}</div>
    </div>
  `;
}

function renderKakaoChat() {
  const name = state.kakaoChatId;
  const messages = state.kakaoChats[name] || [];
  const profile = CONTACT_META[name] || { initials: 'A', avatarClass: 'alt1', profile: 'No profile' };

  const messageHtml = buildKakaoChatMessages(messages);

  return `
    <div class="kakao-chat-shell">
      <div class="kakao-chat-header">
        <div class="kakao-chat-user">
          <button class="nav-button" type="button" data-action="close-kakao" aria-label="返回">‹</button>
          <button class="kakao-avatar ${profile.avatarClass}" type="button" data-action="toggle-kakao-profile" style="width: 38px; height: 38px; border-radius: 12px; padding: 0; cursor: pointer;">${profile.initials}</button>
          <span class="kakao-chat-name">${name}</span>
        </div>
        <div class="kakao-actions">
          <span>⋯</span>
        </div>
      </div>

      <div class="profile-card" hidden>
        <div class="kakao-avatar ${profile.avatarClass}">${profile.initials}</div>
        <div class="kakao-name">${name}</div>
        <div class="kakao-preview">${profile.profile}</div>
      </div>

      <div class="kakao-chat-body">${messageHtml}</div>

      <form class="kakao-composer" data-role="kakao-send" data-contact-id="${name}">
        <input type="text" name="message" placeholder="메세지를 입력하세요" maxlength="200" />
        <button type="submit">전송</button>
      </form>
    </div>
  `;
}

function buildKakaoChatMessages(messages) {
  const sortedMessages = [...messages].sort((a, b) => new Date(a.time) - new Date(b.time));
  let lastDay = '';

  return sortedMessages.map((message) => {
    const currentDay = new Date(message.time).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' });
    const daySeparator = currentDay !== lastDay ? `<div class="chat-date-divider">${currentDay}</div>` : '';
    lastDay = currentDay;
    const rowClass = message.sender === 'me' ? 'me' : 'them';
    return `${daySeparator}<div class="message-row ${rowClass}"><div class="message-bubble">${escapeHtml(message.text)}<span class="message-time">${formatMessageTime(message.time)}</span></div></div>`;
  }).join('');
}

function formatMessageTime(value) {
  const date = new Date(value);
  return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false });
}

function formatShortMessageTime(value) {
  const date = new Date(value);
  const now = new Date();
  const sameDay = date.toDateString() === now.toDateString();
  if (sameDay) {
    return date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false });
  }
  const diffDays = Math.max(0, Math.round((now - date) / 86400000));
  if (diffDays < 7) {
    return date.toLocaleDateString('zh-CN', { weekday: 'short' });
  }
  return date.toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' });
}

function renderXApp() {
  if (state.xDetailId) {
    return renderXDetail();
  }

  const timeline = state.xPosts.map((post) => {
    return `
      <article class="x-post-card" type="button" data-action="open-x-post" data-post-id="${post.id}">
        <div class="x-post-avatar" style="background:${post.userColor}; color:#0f172a;">${post.avatar}</div>
        <div class="x-post-body">
          <div class="x-headline">
            <div class="x-name-line">
              <span class="x-name">${post.user}</span>
              <span class="x-handle">${post.handle}</span>
              <span class="x-time">· ${post.time}</span>
            </div>
            <span class="x-time">•••</span>
          </div>
          <div class="x-content">${escapeHtml(post.text)}</div>
          ${post.image ? `<div class="x-media" style="background-image:url('${post.image}');"></div>` : ''}
          <div class="x-actions">
            <button class="x-post-action" type="button" data-action="open-x-post" data-post-id="${post.id}">💬 ${post.replies}</button>
            <button class="x-post-action ${post.retweeted ? 'active' : ''}" type="button" data-action="toggle-retweet" data-post-id="${post.id}">🔁 ${post.retweets}</button>
            <button class="x-post-action ${post.liked ? 'active' : ''}" type="button" data-action="toggle-like" data-post-id="${post.id}">❤ ${post.likes}</button>
            <button class="x-post-action ${post.bookmarked ? 'active' : ''}" type="button" data-action="toggle-bookmark" data-post-id="${post.id}">🔖</button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  return `
    <div class="x-app">
      <div class="x-topbar">
        <button class="nav-button" type="button" data-action="home" aria-label="返回桌面">⌂</button>
        <div class="x-brand">X</div>
        <button class="nav-button" type="button" data-action="open-x-profile" data-user-name="Dog Lovers Club" aria-label="个人资料">⚙</button>
      </div>
      <div class="x-profile-bar">
        <div class="x-user-avatar">U</div>
        <div class="x-user-summary">
          <div class="x-user-name">User</div>
          <div class="x-user-handle">@userprofile</div>
        </div>
      </div>
      <div class="x-timeline">${timeline}</div>
      <div class="x-bottomnav">
        <div class="x-nav-item active">首页</div>
        <div class="x-nav-item">搜索</div>
        <div class="x-nav-item">通知</div>
        <div class="x-nav-item">消息</div>
      </div>
    </div>
  `;
}

function renderXDetail() {
  const post = state.xPosts.find((item) => item.id === state.xDetailId) || state.xPosts[0];
  const comments = [
    { user: 'K.', handle: '@kwin', text: '강아지 포즈 너무 귀엽다 ㅋㅋ 오늘도 웃음이 나왔어.' },
    { user: 'Mia', handle: '@miam', text: '시드니의 가벼운 바람이 진짜 좋아 보여요. 도시 분위기 잘 잡혀있네요.' },
    { user: 'Jin', handle: '@jinny', text: '이번주에도 사진 잘 정리해서 올리는 것 같아. 너무 좋다.' }
  ];

  return `
    <div class="x-detail">
      <div class="x-detail-header">
        <button class="nav-button" type="button" data-action="close-x-detail" aria-label="返回">‹</button>
        <div class="x-brand">帖子</div>
        <span>⋯</span>
      </div>
      <div class="x-detail-card">
        <div class="x-headline">
          <div class="x-name-line">
            <span class="x-name">${post.user}</span>
            <span class="x-handle">${post.handle}</span>
          </div>
          <span class="x-time">${post.time}</span>
        </div>
        <div class="x-content">${escapeHtml(post.text)}</div>
        ${post.image ? `<div class="x-media" style="background-image:url('${post.image}');"></div>` : ''}
        <div class="x-actions">
          <button class="x-post-action" type="button" data-action="toggle-like" data-post-id="${post.id}">❤ ${post.likes}</button>
          <button class="x-post-action" type="button" data-action="toggle-retweet" data-post-id="${post.id}">🔁 ${post.retweets}</button>
          <button class="x-post-action ${post.bookmarked ? 'active' : ''}" type="button" data-action="toggle-bookmark" data-post-id="${post.id}">🔖</button>
        </div>
      </div>
      <div class="x-detail-comments">
        ${comments.map((comment) => `
          <div class="comment-item">
            <div class="x-name-line">
              <span class="x-name">${comment.user}</span>
              <span class="x-handle">${comment.handle}</span>
            </div>
            <div class="x-content">${escapeHtml(comment.text)}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPhotosApp() {
  const albumImages = [
    'qh2.jpg',
    'qh3.jpg',
    'qh4.jpg',
    'qh5.jpg',
    'qh6.jpg',
    'qh7.jpg',
    'qh8.jpg'
  ].map(normalizeAssetPath);

  return `
    <div class="gallery-app">
      <div class="gallery-grid">
        ${albumImages.map((image) => `
          <div class="gallery-item" style="background-image:url('${image}');"></div>
        `).join('')}
      </div>
    </div>
  `;
}

function getMusinsaProductById(id) {
  return DEFAULT_MUSINSA_PRODUCTS.find((product) => product.id === id) || DEFAULT_MUSINSA_PRODUCTS[0];
}

function getMusinsaFilteredProducts() {
  const musinsa = state.musinsa;
  const categoryKey = musinsa.category || 'all';
  const searchValue = (musinsa.search || '').trim().toLowerCase();

  return DEFAULT_MUSINSA_PRODUCTS.filter((product) => {
    const categoryMatch = categoryKey === 'all' || product.category === categoryKey;
    const searchMatch = !searchValue || product.name.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue);
    return categoryMatch && searchMatch;
  });
}

function getMusinsaCartTotals() {
  const selectedItems = state.musinsa.cart.filter((item) => item.selected);
  const subtotal = selectedItems.reduce((sum, item) => {
    const product = getMusinsaProductById(item.productId);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);
  return {
    itemCount: state.musinsa.cart.reduce((sum, item) => sum + item.quantity, 0),
    selectedCount: selectedItems.reduce((sum, item) => sum + item.quantity, 0),
    subtotal,
    shipping: subtotal > 0 ? 0 : 0,
    total: subtotal
  };
}

function renderMusinsaApp() {
  if (state.musinsa.view === 'detail') {
    return renderMusinsaDetail();
  }
  if (state.musinsa.view === 'cart') {
    return renderMusinsaCart();
  }
  if (state.musinsa.view === 'wishlist') {
    return renderMusinsaWishlist();
  }

  const products = getMusinsaFilteredProducts();
  const categories = [
    { key: 'all', label: '全部商品' },
    { key: 'top', label: '上衣' },
    { key: 'hoodie', label: '卫衣' },
    { key: 'outerwear', label: '外套' },
    { key: 'pants', label: '牛仔裤' },
    { key: 'caps', label: '帽子' },
    { key: 'accessories', label: '配饰' }
  ];

  return `
    <div class="musinsa-app">
      <div class="musinsa-topbar">
        <div class="musinsa-brand">MUSINSA</div>
        <div class="musinsa-top-actions">
          <button class="musinsa-icon-button" type="button" data-action="musinsa-open-cart">🛒 <span class="musinsa-badge">${state.musinsa.cart.reduce((sum, item) => sum + item.quantity, 0)}</span></button>
          <button class="musinsa-icon-button" type="button" data-action="musinsa-open-wishlist">❤</button>
        </div>
      </div>
      <div class="musinsa-search-wrap">
        <input type="text" placeholder="搜索商品" value="${escapeHtml(state.musinsa.search)}" data-role="musinsa-search" />
      </div>
      <div class="musinsa-cats">
        ${categories.map((category) => `
          <button class="musinsa-cat ${state.musinsa.category === category.key ? 'active' : ''}" type="button" data-action="musinsa-open-category" data-category="${category.key}">${category.label}</button>
        `).join('')}
      </div>
      <div class="musinsa-grid">
        ${products.map((product) => {
          const favorite = state.musinsa.wishlist.includes(product.id);
          return `
            <button class="musinsa-card" type="button" data-action="musinsa-open-detail" data-product-id="${product.id}">
              <div class="musinsa-card-media-wrap">
                <img class="musinsa-card-media" src="${product.image}" alt="${escapeHtml(product.name)}" />
                <button class="musinsa-fav-button ${favorite ? 'active' : ''}" type="button" data-action="musinsa-toggle-favorite" data-product-id="${product.id}">♥</button>
              </div>
              <div class="musinsa-card-info">
                <span class="musinsa-tag">${product.tag}</span>
                <div class="musinsa-name">${product.name}</div>
                <div class="musinsa-row">
                  <span class="musinsa-price">₩${product.price.toLocaleString()}</span>
                  <span class="musinsa-meta">${product.colors.length} colors</span>
                </div>
              </div>
            </button>
          `;
        }).join('') || `<div class="musinsa-empty">没有匹配的商品</div>`}
      </div>
    </div>
  `;
}

function renderMusinsaDetail() {
  const product = getMusinsaProductById(state.musinsa.selectedId);
  const favorite = state.musinsa.wishlist.includes(product.id);

  return `
    <div class="musinsa-app musinsa-detail-app">
      <div class="musinsa-detail-header">
        <button class="musinsa-back" type="button" data-action="musinsa-back-home">‹</button>
        <div class="musinsa-brand-tiny">MUSINSA</div>
        <div class="musinsa-detail-actions">
          <button class="musinsa-icon-button small" type="button" data-action="musinsa-toggle-favorite" data-product-id="${product.id}">${favorite ? '♥' : '♡'}</button>
          <button class="musinsa-icon-button small" type="button" data-action="musinsa-open-cart">🛒</button>
        </div>
      </div>
      <div class="musinsa-detail-body">
        <img class="musinsa-detail-image" src="${product.image}" alt="${escapeHtml(product.name)}" />
        <div class="musinsa-detail-box">
          <div class="musinsa-detail-tag">${product.tag}</div>
          <h3>${product.name}</h3>
          <div class="musinsa-price large">₩${product.price.toLocaleString()}</div>
          <p class="musinsa-desc">${product.description}</p>
          <div class="musinsa-option-block">
            <div class="musinsa-option-label">颜色</div>
            <div class="musinsa-option-row">
              ${product.colors.map((color) => `
                <button class="musinsa-option ${state.musinsa.detailColor === color ? 'selected' : ''}" type="button" data-action="musinsa-select-color" data-color="${color}">${color}</button>
              `).join('')}
            </div>
          </div>
          <div class="musinsa-option-block">
            <div class="musinsa-option-label">尺码</div>
            <div class="musinsa-option-row">
              ${product.sizes.map((size) => `
                <button class="musinsa-option ${state.musinsa.detailSize === size ? 'selected' : ''}" type="button" data-action="musinsa-select-size" data-size="${size}">${size}</button>
              `).join('')}
            </div>
          </div>
          <div class="musinsa-detail-actions-row">
            <button class="musinsa-primary-button" type="button" data-action="musinsa-add-to-cart" data-product-id="${product.id}" data-color="${state.musinsa.detailColor}" data-size="${state.musinsa.detailSize}">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMusinsaCart() {
  const totals = getMusinsaCartTotals();
  return `
    <div class="musinsa-app musinsa-cart-app">
      <div class="musinsa-cart-header">
        <button class="musinsa-back" type="button" data-action="musinsa-back-home">‹</button>
        <div class="musinsa-brand-tiny">购物车</div>
        <button class="musinsa-link-button" type="button" data-action="musinsa-open-wishlist">收藏</button>
      </div>
      <div class="musinsa-cart-list">
        ${state.musinsa.cart.map((item) => {
          const product = getMusinsaProductById(item.productId);
          return `
            <div class="musinsa-cart-item">
              <label class="musinsa-check"><input type="checkbox" ${item.selected ? 'checked' : ''} data-action="musinsa-toggle-cart-select" data-item-id="${item.id}" /></label>
              <img src="${product.image}" alt="${escapeHtml(product.name)}" />
              <div class="musinsa-cart-info">
                <div class="musinsa-cart-name">${product.name}</div>
                <div class="musinsa-cart-meta">${item.color} / ${item.size}</div>
                <div class="musinsa-cart-price">₩${(product.price * item.quantity).toLocaleString()}</div>
                <div class="musinsa-qty-row">
                  <button type="button" data-action="musinsa-dec-cart" data-item-id="${item.id}">-</button>
                  <span>${item.quantity}</span>
                  <button type="button" data-action="musinsa-inc-cart" data-item-id="${item.id}">+</button>
                </div>
              </div>
              <button class="musinsa-remove" type="button" data-action="musinsa-remove-cart" data-item-id="${item.id}">删除</button>
            </div>
          `;
        }).join('') || `<div class="musinsa-empty small">购物车是空的</div>`}
      </div>
      <div class="musinsa-cart-summary">
        <div class="musinsa-summary-row"><span>已选商品</span><strong>${totals.selectedCount}</strong></div>
        <div class="musinsa-summary-row"><span>小计</span><strong>₩${totals.subtotal.toLocaleString()}</strong></div>
        <div class="musinsa-summary-row total"><span>合计</span><strong>₩${totals.total.toLocaleString()}</strong></div>
        <button class="musinsa-checkout-button" type="button">结算</button>
      </div>
    </div>
  `;
}

function renderMusinsaWishlist() {
  const wishlistProducts = DEFAULT_MUSINSA_PRODUCTS.filter((product) => state.musinsa.wishlist.includes(product.id));

  return `
    <div class="musinsa-app musinsa-wishlist-app">
      <div class="musinsa-cart-header">
        <button class="musinsa-back" type="button" data-action="musinsa-back-home">‹</button>
        <div class="musinsa-brand-tiny">收藏</div>
        <button class="musinsa-link-button" type="button" data-action="musinsa-open-cart">购物车</button>
      </div>
      <div class="musinsa-grid compact">
        ${wishlistProducts.map((product) => `
          <button class="musinsa-card" type="button" data-action="musinsa-open-detail" data-product-id="${product.id}">
            <div class="musinsa-card-media-wrap">
              <img class="musinsa-card-media" src="${product.image}" alt="${escapeHtml(product.name)}" />
            </div>
            <div class="musinsa-card-info">
              <div class="musinsa-name">${product.name}</div>
              <div class="musinsa-price">₩${product.price.toLocaleString()}</div>
            </div>
          </button>
        `).join('') || `<div class="musinsa-empty">还没有收藏商品</div>`}
      </div>
    </div>
  `;
}

function renderNotesApp() {
  const filteredNotes = state.notes.filter((note) => {
    if (!state.noteQuery) return true;
    const searchText = state.noteQuery.toLowerCase();
    return note.title.toLowerCase().includes(searchText) || note.content.toLowerCase().includes(searchText);
  });

  const listHtml = filteredNotes.map((note) => `
    <button class="note-row" type="button" data-action="open-note" data-note-id="${note.id}">
      <div>
        <div class="note-title">${escapeHtml(note.title)}</div>
        <div class="note-date">${new Date(note.updatedAt).toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' })}</div>
      </div>
      <div class="note-status">${note.title === '周四吃龙山参鸡汤' ? '待办' : '已写'}</div>
    </button>
  `).join('');

  const activeNote = state.notes.find((note) => note.id === state.noteDetailId) || null;

  return `
    <div class="notes-shell">
      <div class="notes-header">
        <div class="kakao-title">备忘录</div>
        <div class="kakao-actions">
          <button type="button" class="secondary-button" data-action="create-note">新建</button>
        </div>
      </div>
      <div class="notes-search">
        <input type="text" value="${escapeHtml(state.noteQuery)}" placeholder="搜索备忘录" data-role="notes-search" />
      </div>
      <div class="notes-list">${listHtml || '<div class="note-row">暂无匹配备忘录</div>'}</div>
      ${activeNote ? `
        <div class="note-detail">
          <h3>${escapeHtml(activeNote.title)}</h3>
          <input id="note-title-input" type="text" value="${escapeHtml(activeNote.title)}" style="width:100%; margin-bottom: 8px; padding: 8px 10px; border: 1px solid rgba(0,0,0,0.08); border-radius: 8px; color: #222;" />
          <textarea id="note-content-input">${escapeHtml(activeNote.content)}</textarea>
          <div class="note-detail-actions">
            <button class="secondary-button" type="button" data-action="delete-note" data-note-id="${activeNote.id}">删除</button>
            <button class="primary-button" type="button" data-action="save-note" data-note-id="${activeNote.id}">保存</button>
          </div>
        </div>
      ` : ''}
    </div>
  `;
}

function renderCallsApp() {
  const listHtml = state.calls.map((call) => `
    <div class="call-row">
      <div class="call-avatar">${call.name.slice(0, 1)}</div>
      <div>
        <div class="name">${call.name}</div>
        <div class="stamp">${call.time}</div>
      </div>
      <div class="call-type-badge">${call.badge}</div>
    </div>
  `).join('');

  return `
    <div class="call-app">
      <div class="call-header">
        <div class="kakao-title">通话记录</div>
        <div>＋</div>
      </div>
      <div class="call-list">${listHtml}</div>
    </div>
  `;
}

function renderContactsApp() {
  const contacts = [
    { name: 'Sunghoon', role: '合唱练习 / 录音工作室', bg: 'linear-gradient(135deg, #dfe9ff, #a7d0ff)' },
    { name: 'Niki', role: '舞蹈练习 / 周末约拍', bg: 'linear-gradient(135deg, #d6f0de, #93d7a7)' },
    { name: 'Jay', role: '音乐制作 / 朋友聚会', bg: 'linear-gradient(135deg, #efe0ff, #c7b2ff)' },
    { name: 'Jungwon', role: '音乐与摄影 / 旅行计划', bg: 'linear-gradient(135deg, #ffe6b5, #f9bc7a)' },
    { name: 'Sunoo', role: '练习记录 / 晚间聊天', bg: 'linear-gradient(135deg, #f9d5d5, #f2a0a0)' }
  ];

  return `
    <div class="contact-app">
      <div class="call-header">
        <div class="kakao-title">联系人</div>
        <div>＋</div>
      </div>
      <div class="contact-list">
        ${contacts.map((contact) => `
          <div class="contact-item">
            <div class="left">
              <div class="contact-photo" style="background:${contact.bg};">${contact.name.slice(0,1)}</div>
              <div>
                <div class="name">${contact.name}</div>
                <div class="stamp">${contact.role}</div>
              </div>
            </div>
            <span class="call-type-badge">消息</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFilesApp() {
  return `
    <div class="file-app">
      <div class="call-header">
        <div class="kakao-title">文件管理</div>
      </div>
      <div class="contact-list">
        <div class="contact-item"><div class="left"><div class="contact-photo">P</div><div><div class="name">项目提案.pdf</div><div class="stamp">3.4 MB · 今天</div></div></div><span class="call-type-badge">PDF</span></div>
        <div class="contact-item"><div class="left"><div class="contact-photo">D</div><div><div class="name">设计资源.fig</div><div class="stamp">28 MB · 昨天</div></div></div><span class="call-type-badge">FIG</span></div>
        <div class="contact-item"><div class="left"><div class="contact-photo">F</div><div><div class="name">手机壁纸集</div><div class="stamp">8 张照片 · 10:22</div></div></div><span class="call-type-badge">目录</span></div>
      </div>
    </div>
  `;
}

function renderSettingsApp() {
  return `
    <div class="settings-app">
      <div class="call-header">
        <div class="kakao-title">设置</div>
      </div>
      <div class="contact-list">
        <div class="contact-item"><div class="left"><div class="contact-photo">🔔</div><div><div class="name">通知</div><div class="stamp">消息提醒与提醒铃声</div></div></div><span class="call-type-badge">开</span></div>
        <div class="contact-item"><div class="left"><div class="contact-photo">📡</div><div><div class="name">Wi‑Fi</div><div class="stamp">Home Wi‑Fi</div></div></div><span class="call-type-badge">开</span></div>
        <div class="contact-item"><div class="left"><div class="contact-photo">🔒</div><div><div class="name">隐私</div><div class="stamp">应用访问控制</div></div></div><span class="call-type-badge">关</span></div>
      </div>
    </div>
  `;
}

function submitKakaoMessage(form) {
  const contactId = form.dataset.contactId;
  const input = form.querySelector('input[name="message"]');
  if (!contactId || !input) return;
  const value = input.value.trim();
  if (!value) {
    input.focus();
    return;
  }

  const conversation = state.kakaoChats[contactId] || [];
  conversation.push({
    id: `msg-${Date.now()}`,
    sender: 'me',
    text: value,
    time: new Date().toISOString()
  });
  state.kakaoChats[contactId] = conversation;
  state.kakaoShouldAutoScroll = true;
  persistKakaoChats();
  renderApp();
}

function handleDocumentClick(event) {
  const actionTarget = event.target.closest('[data-action]');
  if (actionTarget) {
    const dataset = actionTarget.dataset || {};
    handleAction(dataset.action, dataset);
    return;
  }

  const appTarget = event.target.closest('[data-app]');
  if (appTarget) {
    openApp(appTarget.dataset.app);
  }
}

function handleDocumentSubmit(event) {
  const form = event.target.closest('form[data-role="kakao-send"]');
  if (form) {
    event.preventDefault();
    submitKakaoMessage(form);
  }
}

function handleDocumentInput(event) {
  const musinsaInput = event.target.closest('[data-role="musinsa-search"]');
  if (musinsaInput) {
    state.musinsa.search = musinsaInput.value.trim();
    renderApp();
    return;
  }

  const input = event.target.closest('[data-role="notes-search"]');
  if (input) {
    state.noteQuery = input.value.trim();
    renderApp();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateClock();
  renderApp();
  setScreen('home');

  document.addEventListener('click', handleDocumentClick);
  document.addEventListener('submit', handleDocumentSubmit);
  document.addEventListener('input', handleDocumentInput);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && state.currentScreen === 'app') {
      handleAction('back');
    }
  });
});

setInterval(updateClock, 30000);
