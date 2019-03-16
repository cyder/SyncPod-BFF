import { ApolloServer, gql } from "apollo-server-express";
import * as fs from "fs";
import * as path from "path";
import express from "express";
import { GraphQLDateTime, GraphQLDate, GraphQLTime } from "graphql-iso-date";

const API_HOST = process.env.NODE_ENV === "production" ? "https://api.sync-pod.com" : "http://localhost:3000";
const PORT = 4000;

// The GraphQL schema
const typeDefs = gql`
  scalar DateTime
  scalar Date
  scalar Time

  ${fs.readFileSync(path.resolve(__dirname, "..", "graphql", "types.graphql"), "utf-8")}

  type Query {
    ping: String
    recentlyJoinedRooms(limit: Int): [Room!]!
    roomById(id: Int!): Room!
    roomByKey(key: String!): Room!
    popularRooms: [Room!]!
    searchVideos(keyword: String!, pageToken: String): VideoPageInfo!
    videoById(id: String!): Video!
  }

  type Mutation {
    login(email: String!, password: String!): User!
    signup(email: String!, password: String!): User!
    createRoom(name: String!, description: String!, public: Boolean!): Room!
    createUserReport(message: String!): UserReport!
    uploadUserIcon: User! # Not implement yet
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    ping: () => "pong",
    recentlyJoinedRooms: () => {
      return [
        {
          id: 790,
          name: "MyString",
          description: "MyText",
          key: "rvS5ovc8",
          public: false,
          nowPlayingVideo: {
            youtubeVideoId: "7LTda4-SIa4",
            title: "キーワード（ベベチオ カバー）　弾き語り",
            channelTitle: "エキスイチョウの葉",
            thumbnailUrl: "https://i.ytimg.com/vi/7LTda4-SIa4/mqdefault.jpg",
            description: "Capo.1\nベベチオはもっと評価されるべき！！",
            viewCount: 442,
            duration: "5:05",
            published: "2014/10/05",
          },
          lastPlayedVideo: {
            youtubeVideoId: "R1cuHyCF09M",
            title: "成功のキーワードはセルフイメージにあった！聞くだけで成功脳へ「成功へのサプリ」",
            channelTitle: "Takeshi Yonaha",
            thumbnailUrl: "https://i.ytimg.com/vi/R1cuHyCF09M/mqdefault.jpg",
            description:
              "あなたが、成功しないのは、セルフイメージが低いからです。\n聞くだけでセルフイメージを高めます。\nこの音声は、あなたが幸せの成功者となるために録音されました。\n1日１０分、ただ聞き流すだけで90日後にはあなたは自信に満ち、積極的な人間になることができます。\nあなたがリラックスした時、出来れば夜寝る前か朝起きた時にお聴きください。\nこの音声をより効果的に活用するのであれば朝と夜の２回この音声をお聴きください。",
            viewCount: 159301,
            duration: "11:00",
            published: "2014/05/06",
          },
          onlineUsers: [
            {
              id: 1998,
              name: "MyString",
              url: null,
            },
            {
              id: 1999,
              name: "MyString",
              url: null,
            },
          ],
        },
        {
          id: 928,
          name: "MyString",
          description: "MyText",
          key: "rvS5ovc8",
          public: true,
          nowPlayingVideo: null,
          lastPlayedVideo: {
            youtubeVideoId: "R1cuHyCF09M",
            title: "成功のキーワードはセルフイメージにあった！聞くだけで成功脳へ「成功へのサプリ」",
            channelTitle: "Takeshi Yonaha",
            thumbnailUrl: "https://i.ytimg.com/vi/R1cuHyCF09M/mqdefault.jpg",
            description:
              "あなたが、成功しないのは、セルフイメージが低いからです。\n聞くだけでセルフイメージを高めます。\nこの音声は、あなたが幸せの成功者となるために録音されました。\n1日１０分、ただ聞き流すだけで90日後にはあなたは自信に満ち、積極的な人間になることができます。\nあなたがリラックスした時、出来れば夜寝る前か朝起きた時にお聴きください。\nこの音声をより効果的に活用するのであれば朝と夜の２回この音声をお聴きください。",
            viewCount: 159301,
            duration: "11:00",
            published: "2014/05/06",
          },
          onlineUsers: [],
        },
      ];
    },
    roomById: () => {
      return {
        id: 1114,
        name: "MyString",
        description: "MyText",
        key: "Da4D0oPj",
        public: false,
        nowPlayingVideo: null,
        lastPlayedVideo: {
          youtubeVideoId: "R1cuHyCF09M",
          title: "成功のキーワードはセルフイメージにあった！聞くだけで成功脳へ「成功へのサプリ」",
          channelTitle: "Takeshi Yonaha",
          thumbnailUrl: "https://i.ytimg.com/vi/R1cuHyCF09M/mqdefault.jpg",
          description:
            "あなたが、成功しないのは、セルフイメージが低いからです。\n聞くだけでセルフイメージを高めます。\nこの音声は、あなたが幸せの成功者となるために録音されました。\n1日１０分、ただ聞き流すだけで90日後にはあなたは自信に満ち、積極的な人間になることができます。\nあなたがリラックスした時、出来れば夜寝る前か朝起きた時にお聴きください。\nこの音声をより効果的に活用するのであれば朝と夜の２回この音声をお聴きください。",
          viewCount: 159301,
          duration: "11:00",
          published: "2014/05/06",
        },
        onlineUsers: [],
        createUser: {
          id: 1992,
          name: "MyString",
          icon: null,
        },
      };
    },
    roomByKey: () => {
      return {
        id: 1119,
        name: "MyString",
        description: "MyText",
        key: "lBMdoiq4",
        public: false,
        nowPlayingVideo: null,
        lastPlayedVideo: {
          youtubeVideoId: "R1cuHyCF09M",
          title: "成功のキーワードはセルフイメージにあった！聞くだけで成功脳へ「成功へのサプリ」",
          channelTitle: "Takeshi Yonaha",
          thumbnailUrl: "https://i.ytimg.com/vi/R1cuHyCF09M/mqdefault.jpg",
          description:
            "あなたが、成功しないのは、セルフイメージが低いからです。\n聞くだけでセルフイメージを高めます。\nこの音声は、あなたが幸せの成功者となるために録音されました。\n1日１０分、ただ聞き流すだけで90日後にはあなたは自信に満ち、積極的な人間になることができます。\nあなたがリラックスした時、出来れば夜寝る前か朝起きた時にお聴きください。\nこの音声をより効果的に活用するのであれば朝と夜の２回この音声をお聴きください。",
          viewCount: 159301,
          duration: "11:00",
          published: "2014/05/06",
        },
        onlineUsers: [],
        createUser: {
          id: 1997,
          name: "MyString",
          url: null,
        },
      };
    },
    popularRooms: () => {
      return [
        {
          id: 1120,
          name: "public room",
          description: "MyText",
          key: "bxsUcUj1",
          public: true,
          nowPlayingVideo: null,
          lastPlayedVideo: {
            youtubeVideoId: "R1cuHyCF09M",
            title: "成功のキーワードはセルフイメージにあった！聞くだけで成功脳へ「成功へのサプリ」",
            channelTitle: "Takeshi Yonaha",
            thumbnailUrl: "https://i.ytimg.com/vi/R1cuHyCF09M/mqdefault.jpg",
            description:
              "あなたが、成功しないのは、セルフイメージが低いからです。\n聞くだけでセルフイメージを高めます。\nこの音声は、あなたが幸せの成功者となるために録音されました。\n1日１０分、ただ聞き流すだけで90日後にはあなたは自信に満ち、積極的な人間になることができます。\nあなたがリラックスした時、出来れば夜寝る前か朝起きた時にお聴きください。\nこの音声をより効果的に活用するのであれば朝と夜の２回この音声をお聴きください。",
            viewCount: 159301,
            duration: "11:00",
            published: "2014/05/06",
          },
          onlineUsers: [
            {
              id: 1998,
              name: "MyString",
              url: null,
            },
          ],
          createUser: {
            id: 1998,
            name: "MyString",
            url: null,
          },
        },
      ];
    },
    searchVideos: () => {
      return {
        pageInfo: {
          nextPageCursor: "CBQQAA",
          prevPageCursor: "CAoQAQ",
          totalCount: 34736,
          perPage: 10,
        },
        videos: [
          {
            youtubeVideoId: "lRmhVKfIJMY",
            title: "COMPASSでお宝キーワード(ブルーオーシャンキーワード)の見つけ方＆豪華特典付き動画",
            channelTitle: "channel taka",
            thumbnailUrl: "https://i.ytimg.com/vi/lRmhVKfIJMY/mqdefault.jpg",
            description:
              "キーワード選定に物凄く時間をかけている方へ\n効率化を図るためにもCOMPASSはアフィリエイトやっている方なら\n絶対必須なSEO分析ツールですね(｀・∀・´)v\n\n\nインターネットにはクッキーと呼ばれる機能がありまして\nこれが有効になっていないと特典を受け取ることが出来ませんので\n注意してください。\n\nご購入の際に、「たか(taka)からの豪華特典」の記載が確認\nできましたらそのままご購入にお進み下さい。\n\n商品ダウンロードページ内で特典案内のテキストを\nダウンロード頂けます。\n\nそちらの特典案内テキスト内の指示に従い特典請求を行って\n頂けますよう宜しくお願い致します。\n\n\nCOMPASS販売ページ\n⇒ http://pctaka777.com/t/vrdgjdx\n\nクッキー確認はこちらから\n⇒ http://tokuten.kasegoo.info/cookie/\n\nご連絡フォームはこちら\n⇒ http://my.formman.com/form/pc/mJzFyCAbDqipmyM5/\n\n------------------------------------------------------------------------------\n\nよろしかったらこちらも\nチャンネル登録お願いします！ヽ(´▽｀)\n\nTaka Games\n⇒ https://www.youtube.com/channel/UClVp1egjJ0-UqtBuu33i01g/\n\n\nたか(taka)公式ブログはこちら\n⇒ http://pctaka777.com/\n\n\nブログ、転売、YouTubeで稼ぐためのメルマガ配信しております。\n無料登録で便利ツールプレゼント中！\n※メルマガ解除はいつでもできます。\n⇒ http://pctaka777.com/takamerumaga/\n\n\nTwitter フォローよろしくお願いします。\n⇒ https://twitter.com/trainn777\n\n\n【おすすめ商品】\nボタン一つ押せばリサーチツールがおもしろいように\n実際に売れている売れ筋商品だけをピックアップ！\n豪華特典付き！\n⇒ http://pctaka777.com/review/buymaster/\n\n\n稼いでいるアフィリエイターさん は皆、持っている\nそれ位必須の最強・ 高機能デザインツール！\nSIRIUS(シリウス) 豪華特典付きサイトはこちら\n⇒ http://pctaka777.com/review/sirius/",
            viewCount: 316,
            duration: "10:40",
            published: "2017/09/09",
          },
          {
            youtubeVideoId: "8hHe1g7huSE",
            title: "アフィリエイトでライバルサイト不在のキーワードを見つける「ずらし」の方法！実践解説",
            channelTitle: "龍市",
            thumbnailUrl: "https://i.ytimg.com/vi/8hHe1g7huSE/mqdefault.jpg",
            description:
              "チャンネル登録はコチラから⇒http://bit.ly/2fy0Hw7\n龍市のブログはコチラから⇒http://ryu-blo.jp/\n無料メルマガ登録はコチラ⇒https://my24p.com/p/r/B3XFh90F\n\n龍市（しゃべってる人）のチャンネル登録 & 公式ブログは\n上記リンクからお願いします！\n\n\n動画を気に入ってもらえた場合は\nぜひ、チャンネル登録して頂けるとうれしいです(^^)\n\n◆関連ブログ記事\nアフィリエイトのキーワードずらし！簡単にずらすコツは発想術に？\nhttp://ryu-blo.jp/writing/1341/\n\n◆関連動画\nアフィリエイト記事のタイトルの2種類の作り方や考え方！魅力的なタイトルの付け方も！\nhttps://youtu.be/dxSMEvFG6rk\n\n【初心者必見】アフィリエイトの記事タイトル！文字数やキーワードの種類を完全ガイド！\nhttps://youtu.be/JSLa8k4rt7M\n\nタイトルのメインキーワードネタとは？SEOに効果的な探し方やライバルを出し抜くコツも\nhttps://youtu.be/ReiVVqEzotM\n\n関連キーワードとは？意味や探し方を実況解説！検索数で入れる順番や個数が決まる？\nhttps://youtu.be/Y0kQDn79boE\n\nアフィリエイトのライバルチェック4項目！初心者でも簡単にできる裏技も無料で暴露！\nhttps://youtu.be/muPmjOXqWkc\n\n【動画説明】\nライバル不在・少ないキーワードやネタを見つけるためには\n「ずらし」のテクニックが必須になってきます。\n\n\nこれは、インターネットビジネスの世界では\n皆が声を挙げていることですが、\n肝心のその「ずらし方」についてまで言及している人は\n殆ど見られないように思います。\n\n\nそこで、今回の動画では\n具体的にどのように「ずらし」を行うのかを動画にまとめました。\n\n初心者の方にもおすすめな動画となっていますので、\nぜひ、この動画をみてあなたのブログ運営に活かしていってください。",
            viewCount: 363,
            duration: "6:28",
            published: "2017/06/25",
          },
          {
            youtubeVideoId: "1Vqs1hmcUUs",
            title: "エコノミスト・森田龍二の「経済・会計キーワード解説」 第3回　～G20～",
            channelTitle: "【資格の総合スクール】LEC東京リーガルマインド",
            thumbnailUrl: "https://i.ytimg.com/vi/1Vqs1hmcUUs/mqdefault.jpg",
            description:
              "森田龍二LEC専任講師が、経済・会計の領域からキーワードをピックアップして解説していきます。\n不動産鑑定士など資格試験の受験生、就職活動中の大学生、経済や会計に興味がある方にお勧め！\n月1回程度の更新を予定しています。\n「森田龍二の経済・会計解説部屋」特設ページはこちら\nhttp://www.lec-jp.com/kanteishi/info/morita_jiji/\n各種ガイダンスや初回講義をご覧になりたい方は「WEB公開講座」\nhttp://www.lec-jp.com/kanteishi/guidance/index_web.html\nLEC不動産鑑定士サイト\nhttp://www.lec-jp.com/kanteishi/",
            viewCount: 125,
            duration: "24:46",
            published: "2018/03/29",
          },
          {
            youtubeVideoId: "7LTda4-SIa4",
            title: "キーワード（ベベチオ カバー）　弾き語り",
            channelTitle: "エキスイチョウの葉",
            thumbnailUrl: "https://i.ytimg.com/vi/7LTda4-SIa4/mqdefault.jpg",
            description: "Capo.1\nベベチオはもっと評価されるべき！！",
            viewCount: 442,
            duration: "5:05",
            published: "2014/10/05",
          },
          {
            youtubeVideoId: "GVs8iLa0RiQ",
            title: "アフィ中S1#6『ライバルの少ないキーワードの探し方』",
            channelTitle: "アフィリエイト中学校",
            thumbnailUrl: "https://i.ytimg.com/vi/GVs8iLa0RiQ/mqdefault.jpg",
            description:
              "今回も引き続きキーワードについてこの街先生が教えてくれます。前回より深掘りした「ライバルの少ないキーワード」というテーマでより勉強になる回になっています！全アフィリエイター必見です！\n\n\n◆◇◆ついに！アフィ中がLINEはじめました！！◆◇◆\n\n皆さん、是非友達になりましょう。\n\n【LINE友達追加URL】\nhttps://line.me/R/ti/p/%40qhd5479c\n\n友達登録お待ちしています＾＾\n\n◆◇◆ チャンネル登録 ◆◇◆\n\n【アフィリエイト中学校】チャンネル登録はコチラ\nhttps://www.youtube.com/channel/UCmOegrxAj6uzaw5c5uM7rjA?sub_confirmation=1&src_vid=2oHkLffLYuk&feature=iv&annotation_id=annotation_1397360565\n\n\n===== アフィリエイト中学校の動画一覧 =====\n\n【ブログアフィリエイト編】\n無料ブログを使って、アフィリエイトをはじめよう！ アフィリエイトの基礎が満載のコンテンツ。初心者必見！\nhttps://www.youtube.com/playlist?list=PLstagH_Zz9-jocjHyM9oZMS-JD3G2_22V\n\n\n【キーワード編】\n稼げるキーワードの基本的な考え方から、ズラシた一般キーワードのひねり方まで、具体的な手法を大公開！ \nhttps://www.youtube.com/watch?v=RybglSMD27Q\n\n\n【ワードプレス編】\n無料のワードプレスを使って、本格的なアフィリエイトサイトを作成。0からはじめて3ヶ月で5万円稼げるか！？\nhttps://www.youtube.com/playlist?list=PLstagH_Zz9-h3OL3Fjx0uTzis-vkLDeNB",
            viewCount: 14758,
            duration: "16:03",
            published: "2016/03/26",
          },
          {
            youtubeVideoId: "SB8CIJfWGzs",
            title: "キーワード選定によるSEO対策まとめ！検索エンジンにアピールするタイトルを極めよう！",
            channelTitle: "渚ひろし＠自由ライター",
            thumbnailUrl: "https://i.ytimg.com/vi/SB8CIJfWGzs/mqdefault.jpg",
            description:
              "ブログとメルマガもよろしくお願いします！＾＾\nワードプレスブログ：http://nagihiro.com/\nメルマガ：http://nagihiro.com/nh55/level/\n\n\n動画を気に入ってもらえた場合は\nぜひチャンネル登録して頂けるとうれしいです。\n\nチャンネル登録はこちら！\n⇒ http://www.youtube.com/user/NAGISA62?sub_confirmation=1",
            viewCount: 5658,
            duration: "15:19",
            published: "2014/02/20",
          },
          {
            youtubeVideoId: "1lGkpi67Z94",
            title: "Googleキーワードプランナーの使い方！検索ボリューム&関連キーワードを調べよう！",
            channelTitle: "渚ひろし＠自由ライター",
            thumbnailUrl: "https://i.ytimg.com/vi/1lGkpi67Z94/mqdefault.jpg",
            description:
              "渚ひろし（しゃべってる人）のブログ & 公式メルマガはこちら！\nブログ：http://nagihiro.com/\nメルマガ：http://nagihiro.com/nh55/youtool/\n\n\nキーワードプランナーのログイン画面はこちら\n→ https://adwords.google.co.jp/KeywordPlanner\n\n\n\n動画を気に入ってもらえた場合は\nぜひ、チャンネル登録して頂けるとうれしいです＾＾\n\nチャンネル登録はこちらから！\n⇒ http://www.youtube.com/user/NAGISA62?sub_confirmation=1",
            viewCount: 5393,
            duration: "10:01",
            published: "2014/06/25",
          },
          {
            youtubeVideoId: "R1cuHyCF09M",
            title: "成功のキーワードはセルフイメージにあった！聞くだけで成功脳へ「成功へのサプリ」",
            channelTitle: "Takeshi Yonaha",
            thumbnailUrl: "https://i.ytimg.com/vi/R1cuHyCF09M/mqdefault.jpg",
            description:
              "あなたが、成功しないのは、セルフイメージが低いからです。\n聞くだけでセルフイメージを高めます。\nこの音声は、あなたが幸せの成功者となるために録音されました。\n1日１０分、ただ聞き流すだけで90日後にはあなたは自信に満ち、積極的な人間になることができます。\nあなたがリラックスした時、出来れば夜寝る前か朝起きた時にお聴きください。\nこの音声をより効果的に活用するのであれば朝と夜の２回この音声をお聴きください。",
            viewCount: 159301,
            duration: "11:00",
            published: "2014/05/06",
          },
          {
            youtubeVideoId: "iaoOHE1BiWM",
            title: "YouTube人気キーワードのリサーチ方法",
            channelTitle: "YouTube動画集客.com",
            thumbnailUrl: "https://i.ytimg.com/vi/iaoOHE1BiWM/mqdefault.jpg",
            description:
              "サラリーマンであることに限界を感じている方へ\nhttp://vancool.biz/l/c/O0SQL1OV/RyjWwNxK\n\n\nYouTube人気キーワードのリサーチ方法\n\n\nキーワードツール\nhttp://keywordtool.io/youtube\n\n\n関連動画\n\n人気動画と人気チャンネルのリサーチ方 \nhttps://youtu.be/biCj1tZKvxg\n\nキーワードリサーチ キーワードの需要を確認しよう\nhttps://youtu.be/5cskgQBWUCM\n\n【SEO基礎01】キーワードリサーチ【関連キーワード取得ツールとGoogleキーワードプランナーを使ってマインドマップで整理する方法】 \nhttps://youtu.be/fKMS0AhC1Cc\n\n4-1. YouTube人気動画リサーチ方法(キーワード編) \nhttps://youtu.be/mJ34XFtG2Ic\n\n5-1. YouTube人気動画リサーチ方法(芋づる式) \nhttps://youtu.be/UteWs1NcQg4",
            viewCount: 1449,
            duration: "10:25",
            published: "2017/02/03",
          },
          {
            youtubeVideoId: "bBdnUIOz_Do",
            title: "キーワードプランナーの使い方",
            channelTitle: "メディサポチャンネル SEO集客コンサル",
            thumbnailUrl: "https://i.ytimg.com/vi/bBdnUIOz_Do/mqdefault.jpg",
            description: "Google　キーワードプランナーの簡単な説明\n\nhttp://okayama-mediasupport.com/seo/archives/392",
            viewCount: 290,
            duration: "5:58",
            published: "2017/01/12",
          },
        ],
      };
    },
    videoById: () => {
      return {
        youtubeVideoId: "PqJNc9KVIZE",
        title: "livetune feat. 初音ミク 『Tell Your World』Music Video",
        channelTitle: "kzlivetune",
        thumbnailUrl: "https://i.ytimg.com/vi/PqJNc9KVIZE/mqdefault.jpg",
        description:
          'Music Video Director : wakamuraP x fantasista utamaro x TAKCOM\n\n※このMusic Videoを鑑賞する際は、部屋を十分に明るくし画面から離れてご覧下さい。\n※When you watch the Music Clip, Please see the screen bright enough away from the room.\n\nlivetune feat. 初音ミク Tell Your World EP リリース記念限定アイテム\n販売中!! → http://toys-hop.com/\n\nlivetune feat. 初音ミク "Tell Your World" （サイン入り）等身大パネルが当たる!! → http://dot-and-line.com/\n\nGoogle Chrome "あなたのウェブを、はじめよう。"　CMソング\n\nTell Your World／livetune feat. 初音ミク\n作詞・作曲・編曲：kz\n\n形のない気持ち忘れないように\n決まりきったレイアウトを消した\nふと口ずさんだフレーズを掴まえて\n胸に秘めた言葉乗せ空に解き放つの\n\n君に伝えたいことが\n君に届けたいことが\nたくさんの点は線になって\n遠く彼方へと響く\n君に伝えたい言葉\n君に届けたい音が\nいくつもの線は円になって\n全て繋げてく　どこにだって\n\n真っ白に澄んだ光は君のよう\nかざした手の隙間を伝う声が\nふと動いた指先刻むリズムに\nありったけの言葉乗せ空に解き放つの\n\n君に伝えたいことが\n君に届けたいことが\nたくさんの点は線になって\n\n遠く彼方まで穿(うが)つ \n君に伝えたい言葉\n君に届けたい音が\nいくつもの線は円になって\n全て繋げてく　どこにだって\n\n奏でていた  変わらない日々を疑わずに\n朝は誰かがくれるものだと思ってた\n一瞬でも信じた音　景色を揺らすの\n教えてよ　君だけの世界\n\n君が伝えたいことは\n君が届けたいことは\nたくさんの点は線になって\n遠く彼方へと響く\n君が伝えたい言葉\n君が届けたい音は\nいくつもの線は円になって\n全て繋げてく　どこにだって\n\nTell Your World / livetune feat. Hatsune Miku\nLyrics, Music, Arrangement: kz\n\nNot to forget the intangible feelings\nI deleted the routine layout\nGrasp the phrase I happened to be humming\nSpread secret words of the heart into the sky\n\nI want to tell you\nI want to give you\nNodes of feelings form a link\nEchoing to the faraway distance\nWords I want to tell you\nSounds I want to give you\nLinks of feelings form a world\nConnecting everything   Connecting to everywhere\n\nThe pure white light feels like you\nThe voice flows through my hand held against the light\nOn the rhythm my fingertips suddenly make\nSpread all words of the heart into the sky\n\nI want to tell you\nI want to give you\nNodes of feelings form a link\nReaching over the faraway distance\nWords I want to tell you\nSounds I want to give you\nLinks of feelings form a world\nConnecting everything   Connecting to everywhere\n\nI had been playing the tune without a doubt about the rhythm of my days\nI had thought the coming of mornings is a given\nThe sounds I believe in even for a second, shift my sceneries\nTell your world\n\nYou want to tell\nYou want to give\nNodes of feelings form a link\nEchoing to the faraway distance\nWords you want to tell\nSounds you want to give\nLinks of feelings form a world\nConnecting everything   Connecting to everywhere\n\n\n(C) Crypton Future Media, Inc. crypton.net\n(C) FANTASISTAUTAMARO ALL RIGHTS RESERVED.',
        viewCount: 16776161,
        duration: "4:33",
        published: "2012/03/12",
      };
    },
  },
  Mutation: {
    login: () => {
      return {
        id: 69,
        icon: null,
        email: "user@example.com",
        name: "MyString",
        accessToken: "69:q1aXhT-onz4sWejxcV1s",
        createdAt: "2018-03-31T07:35:05.000Z",
        updatedAt: "2018-03-31T07:35:05.000Z",
        selfIntroduction: null,
      };
    },
    signup: () => {
      return {
        id: 94,
        email: "user@example.com",
        name: "",
        accessToken: "94:U-yJzvseLMqVibMK-y_Z",
        createdAt: "2018-03-31T07:35:06.000Z",
        updatedAt: "2018-03-31T07:35:06.000Z",
        selfIntroduction: null,
        icon: null,
      };
    },
    createRoom: () => {
      return {
        id: 1112,
        name: "MyString",
        description: "MyText",
        key: "dAg2r_u9",
        public: true,
        nowPlayingVideo: null, // あとで変更する
        lastPlayedVideo: null, // あとで変更する
        onlineUsers: [], // あとで変更する
        createUser: {
          id: 1988,
          name: "MyString",
          url: null,
        },
      };
    },
    createUserReport: () => {
      return {
        id: 1,
        message: "message",
        createdAt: "2018-03-31T07:35:06.000Z",
        updatedAt: "2018-03-31T07:35:06.000Z",
      };
    },
    uploadUserIcon: () => {
      return {
        id: 87,
        accessToken: "87:UyH2nBGrDiyRzsYXa6mx",
        icon: "/Users/shintanitoshio/Works/YouTubeSyncServer/spec/tmp/uploads/user/icon/87/icon.jpg",
        email: "user@example.com",
        name: "MyString",
        createdAt: "2018-03-31T07:35:06.000Z",
        updatedAt: "2018-03-31T07:35:06.000Z",
        selfIntroduction: null,
      };
    },
  },
  DateTime: GraphQLDateTime,
  Date: GraphQLDate,
  Time: GraphQLTime,
};

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, cors: { credentials: true, origin: API_HOST } });

app.listen({ port: PORT }, () => {
  console.log(`🚀  Server ready at localhost:${PORT}${server.graphqlPath}`);
});
