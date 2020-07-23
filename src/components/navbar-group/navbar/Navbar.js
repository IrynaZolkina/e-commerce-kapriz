import React, { Component } from "react";
import { NavLink, withRouter, Redirect } from "react-router-dom";

import "./navbar.scss";
import Submenu from "../submenu/Submenu";
import firebase, { firestore } from "../../../firebase/FirebaseUtils";
import CollectionPage from "../../../pages/collection-page/CollectionPage";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showSideMenu: false,
      showSideMenuSub: false,
      showSideMenuSubSub: false,
      chosenMainMenuNumber: "",
      chosenSubMenuNumber: "",
      showSubmenu: true,
      navbarMenuTest: [
        //********* */  "парфуми",
        {
          title: "парфуми",
          order: "01",
          code: "000297",
          number: "01000000",
          submenuItemsInColumn: {
            first: "1",
            second: "5",
            third: "6",
            forth: "9",
            fifth: "10",
            sixth: "",
          },

          subMenu: [
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-27_04-08-48.jpg?alt=media&token=055de8b8-a7dc-4dc3-9f19-4d59d7365454",
              number: "99999992",
            },
            {
              title: ".Жіночі",
              code: "000298",
              number: "01000100",
              last: true,
            },
            {
              title: ".Чоловічі",
              code: "000299",
              number: "01000200",
              last: true,
            },
            {
              title: ".Унісекс",
              code: "000300",
              number: "01000300",
              last: true,
            },
            {
              title: ".Нішеві",
              code: "000301",
              number: "01000400",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-27_04-07-57.jpg?alt=media&token=a5141722-4f02-4a41-b592-944879bacd96",
              number: "99999993",
            },
            {
              title: ".Дитячі",
              code: "000302",
              number: "01000500",
              last: true,
            },
            {
              title: ".Мініатюри",
              code: "000303",
              number: "01000600",
              last: true,
            },
            {
              title: ".Набори",
              code: "000304",
              number: "01000700",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-26_10-03-14%20(2).jpg?alt=media&token=ffc36789-014e-424c-b29a-b18d0de4c805",
              number: "99999988",
            },
            /* {
                            title:
                              "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-27_04-07-39.jpg?alt=media&token=d12c2efe-c4d2-4ac7-9017-d66bdcec9432",
                            number: "99999991",
                          }, 
                          {
                            title:
                              "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-26_10-03-12%20(3).jpg?alt=media&token=36068e6a-68ee-4a48-b9f0-2ced8f4ec3ca",
                            number: "99999990",
                          },
                          {
                            title:
                              "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-27_07-12-53.jpg?alt=media&token=35f66b66-c1e9-41c1-b4bb-d7871792f91d",
                            number: "99999989",
                          },*/
          ],
        },
        //********* */  "макияж"
        {
          title: "Макіяж",
          order: "02",
          code: "000208",
          number: "02000000",
          submenuItemsInColumn: {
            first: "17",
            second: "37",
            third: "49",
            forth: "66",
            fifth: "83",
            sixth: "98",
          },

          subMenu: [
            { title: "#БРОВИ", code: "000210", number: "02010000" },
            {
              title: ".Фарбування брів і вій",
              code: "000211",
              number: "02010100",
            },
            {
              title: "-Фарби для брів і вій",
              code: "000212",
              number: "02010101",
              last: true,
            },
            {
              title: "-Хна для брів і вій",
              code: "000213",
              number: "02010102",
              last: true,
            },
            {
              title: "-Окисники",
              code: "000214",
              number: "02010103",
              last: true,
            },
            {
              title: "-Спеціальні засоби",
              code: "000215",
              number: "02010104",
              last: true,
            },
            { title: ".Макіяж брів", code: "000216", number: "02010200" },
            { title: "-Віск", code: "000217", number: "02010201", last: true },
            { title: "-Гель", code: "000218", number: "02010202", last: true },
            { title: "-Туш", code: "000219", number: "02010203", last: true },
            { title: "-Тіні", code: "000220", number: "02010204", last: true },
            { title: "-Пудра", code: "000221", number: "02010205", last: true },
            {
              title: "-Олівці",
              code: "000222",
              number: "02010206",
              last: true,
            },
            {
              title: "-Маркери",
              code: "000223",
              number: "02010207",
              last: true,
            },
            { title: ".Тінти", code: "000224", number: "02010300", last: true },
            {
              title: ".Сироватки для росту брів і вій",
              code: "000225",
              number: "02010400",
              last: true,
            },
            {
              title: ".Пінцети",
              code: "000226",
              number: "02010500",
              last: true,
            },
            { title: "#ОБЛИЧЧЯ", code: "000227", number: "02020000" },
            {
              title: ".Бази/основи/праймери",
              code: "000228",
              number: "02020100",
              last: true,
            },
            { title: ".Тональні креми", code: "000229", number: "02020200" },
            {
              title: "-Зволожуючі",
              code: "000230",
              number: "02020201",
              last: true,
            },
            {
              title: "-Матуючі",
              code: "000231",
              number: "02020202",
              last: true,
            },
            {
              title: "-ВВ креми",
              code: "000232",
              number: "02020203",
              last: true,
            },
            {
              title: "-СС креми",
              code: "000233",
              number: "02020204",
              last: true,
            },
            {
              title: ".Тональні основи",
              code: "000234",
              number: "02020300",
              last: true,
            },
            {
              title: ".Корекція недоліків",
              code: "000235",
              number: "02020400",
            },
            {
              title: "-Консилери",
              code: "000236",
              number: "02020401",
              last: true,
            },
            {
              title: "-Коректори",
              code: "000237",
              number: "02020402",
              last: true,
            },
            { title: ".Контурінг", code: "000238", number: "02020500" },
            {
              title: "-Хайлайтери",
              code: "000239",
              number: "02020501",
              last: true,
            },
            {
              title: "-Скульптори",
              code: "000240",
              number: "02020502",
              last: true,
            },
            {
              title: "-Бронзери",
              code: "000241",
              number: "02020503",
              last: true,
            },
            {
              title: "-Рум'яна",
              code: "000242",
              number: "02020504",
              last: true,
            },
            {
              title: "-Палетки",
              code: "000243",
              number: "02020505",
              last: true,
            },

            { title: ".Пудри", code: "000244", number: "02020600", last: true },
            {
              title: ".Фіксатори макіяжу",
              code: "000245",
              number: "02020700",
              last: true,
            },
            {
              title: ".Палетки",
              code: "000246",
              number: "02020800",
              last: true,
            },

            { title: "#ГУБИ", code: "000247", number: "02030000" },
            { title: ".Губна помада", code: "000248", number: "02030100" },
            {
              title: "-Глянцеві помади",
              code: "000249",
              number: "02030101",
              last: true,
            },
            {
              title: "-Матові помади",
              code: "000250",
              number: "02030102",
              last: true,
            },
            {
              title: "-Помади з блиском",
              code: "000251",
              number: "02030103",
              last: true,
            },
            {
              title: ".Блиски для губ",
              code: "000252",
              number: "02030200",
              last: true,
            },
            {
              title: ".Бальзами для губ",
              code: "000253",
              number: "02030300",
              last: true,
            },
            {
              title: ".Олівці контурні для губ",
              code: "000254",
              number: "02030400",
            },
            {
              title: "-Дерев'яні",
              code: "000255",
              number: "02030401",
              last: true,
            },
            {
              title: "-Автоматичні",
              code: "000256",
              number: "02030402",
              last: true,
            },
            {
              title: ".Палетки",
              code: "000257",
              number: "02030500",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupmakeup2.jpg?alt=media&token=c117ff15-e225-450e-b578-6b2c2b95eaa7",
              number: "99999996",
            },
            { title: "#ОЧІ", code: "000258", number: "02040000" },
            { title: ".Для вій", code: "000259", number: "02040100" },
            {
              title: "-Основа під туш",
              code: "000260",
              number: "02040101",
              last: true,
            },
            {
              title: "-Туш для вій",
              code: "000261",
              number: "02040102",
              last: true,
            },
            {
              title: "-Сироватки для росту і укріплення вій",
              code: "000262",
              number: "02040103",
              last: true,
            },
            { title: ".Для повік", code: "000263", number: "02040200" },
            {
              title: "-Олівці контурні",
              code: "000264",
              number: "02040201",
              last: true,
            },
            {
              title: "-Підводки",
              code: "000265",
              number: "02040202",
              last: true,
            },
            {
              title: "-База для тіней",
              code: "000266",
              number: "02040203",
              last: true,
            },
            {
              title: "-Тіні для повік",
              code: "000267",
              number: "02040204",
              last: true,
            },
            {
              title: "-Палетки з тінями",
              code: "000268",
              number: "02040205",
              last: true,
            },

            { title: ".Накладні вії", code: "000269", number: "02040300" },
            {
              title: "-Пучкові вії",
              code: "000270",
              number: "02040301",
              last: true,
            },
            {
              title: "-Комплекти вій",
              code: "000271",
              number: "02040302",
              last: true,
            },
            {
              title: "-Клей для вій",
              code: "000272",
              number: "02040303",
              last: true,
            },
            {
              title: "-Ремувер",
              code: "000273",
              number: "02040304",
              last: true,
            },
            {
              title: "-Пінцети",
              code: "000274",
              number: "02040305",
              last: true,
            },

            { title: "#АКСЕСУАРИ", code: "000275", number: "02050000" },
            {
              title: ".Аплікатори",
              code: "000276",
              number: "02050100",
              last: true,
            },
            { title: ".Пензлики", code: "000277", number: "02050200" },
            {
              title: "-Для тіней",
              code: "000278",
              number: "02050201",
              last: true,
            },
            {
              title: "-Для брів",
              code: "000279",
              number: "02050202",
              last: true,
            },
            {
              title: "-Для вій",
              code: "000280",
              number: "02050203",
              last: true,
            },
            {
              title: "-Для підводки",
              code: "000281",
              number: "02050204",
              last: true,
            },
            {
              title: "-Для тональних основ",
              code: "000282",
              number: "02050205",
              last: true,
            },
            {
              title: "-Для контурінгу",
              code: "000283",
              number: "02050206",
              last: true,
            },
            {
              title: "-Для рідких скульпторів",
              code: "000284",
              number: "02050207",
              last: true,
            },
            {
              title: "-Для пудри",
              code: "000285",
              number: "02050208",
              last: true,
            },
            {
              title: "-Для рум'ян",
              code: "000286",
              number: "02050209",
              last: true,
            },
            {
              title: "-Для губ",
              code: "000287",
              number: "02050210",
              last: true,
            },
            {
              title: ".Спонжі",
              code: "000288",
              number: "02050300",
              last: true,
            },
            {
              title: ".Пуховки для пудри",
              code: "000289",
              number: "02050400",
              last: true,
            },
            {
              title: ".Набори пензлів",
              code: "000290",
              number: "02050500",
              last: true,
            },
            {
              title: ".Пінцети",
              code: "000291",
              number: "02050600",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupmakeup1.jpg?alt=media&token=66c02249-c53e-41f8-a952-f16693a1031a",
              number: "99999994",
            },
            { title: "#ЗНЯТТЯ МАКІЯЖУ", code: "000292", number: "02060000" },
            {
              title: ".Міцелярні води",
              code: "000293",
              number: "02060100",
              last: true,
            },
            {
              title: ".Демакіяжи",
              code: "000294",
              number: "02060200",
              last: true,
            },
            {
              title: ".Спонжі для демакіяжу",
              code: "000295",
              number: "02060300",
              last: true,
            },
            {
              title: ".Серветки для демакіяжу",
              code: "000296",
              number: "02060400",
              last: true,
            },
          ],
        },
        //********* */  "волосся"
        {
          title: "волосся",
          order: "03",
          code: "000001",

          number: "03000000",
          submenuItemsInColumn: {
            first: "18",
            second: "39",
            third: "55",
            forth: "79",
            fifth: "98",
            sixth: "151",
          },
          subMenu: [
            {
              title: "#ФАРБУВАННЯ ",
              code: "000002",
              number: "03010000",
              level: "2",
            },

            {
              title: ".Фарбники",
              code: "000003",
              number: "03010100",
              level: "3",
            },
            {
              title: "-Аміачні",
              code: "000004",
              number: "03010101",
              level: "4",
              last: true,
            },
            {
              title: "-Безаміачні",
              code: "000005",
              number: "03010102",
              level: "4",
              last: true,
            },
            {
              title: "-Пігменти прямої дії",
              code: "000006",
              number: "03010103",
              level: "4",
              last: true,
            },
            {
              title: "-Фарбуючі шампуні, маски, спреї та інше",
              code: "000007",
              number: "03010104",
              level: "4",
              last: true,
            },
            {
              title: "-Анти-жовті засоби",
              code: "000008",
              number: "03010105",
              last: true,
            },
            {
              title: "-Для чоловіків",
              code: "000446",
              number: "03010106",
              last: true,
            },

            {
              title: ".Освітлюючі засоби",
              code: "000009",
              number: "03010200",
              last: true,
            },
            {
              title: ".Окисники",
              code: "000010",
              number: "03010300",
              last: true,
            },
            {
              title: ".Технічні засоби",
              code: "000011",
              number: "03010400",
              level: "3",
            },
            {
              title: "-Глибока очистка",
              code: "000012",
              number: "03010401",
              last: true,
            },
            {
              title: "-Стабілізатори",
              code: "000013",
              number: "03010402",
              last: true,
            },
            {
              title: "-Деперманенти",
              code: "000014",
              number: "03010403",
              last: true,
            },
            {
              title: "-Засоби д/зняття фарби з волосся",
              code: "000015",
              number: "03010404",
              last: true,
            },
            {
              title: "-Засоби для видалення фарби з шкіри",
              code: "000016",
              number: "03010405",
              last: true,
            },
            {
              title: "-Захистні сироватки",
              code: "000017",
              number: "03010406",
              last: true,
            },
            {
              title: "-Добавки до фарби",
              code: "000018",
              number: "03010407",
              last: true,
            },

            {
              title: "#ДОГЛЯД ЗА ВОЛОССЯМ ",
              code: "000019",
              number: "03020000",
              level: "2",
            },

            {
              title: ".Шампуні",
              code: "000020",
              number: "03020100",
              level: "3",
            },

            {
              title: "-Безсульфатні",
              code: "000022",
              number: "03020102",
              last: true,
            },
            {
              title: "-Лікувальні",
              code: "000023",
              number: "03020103",
              last: true,
            },
            {
              title: "-Фарбуючі",
              code: "000024",
              number: "03020104",
              last: true,
            },
            {
              title: "-Анти-жовті",
              code: "000025",
              number: "03020105",
              last: true,
            },
            {
              title: "-Сульфатні",
              code: "000026",
              number: "03020106",
              last: true,
            },
            {
              title: "-Сухі шампуні",
              code: "000027",
              number: "03020107",
              last: true,
            },
            {
              title: "-Чоловічі",
              code: "000028",
              number: "03020108",
              last: true,
            },
            {
              title: "-Дитячі",
              code: "000029",
              number: "03020109",
              last: true,
            },
            {
              title: ".Кондиціонери",
              code: "000030",
              number: "03020200",
              last: true,
            },
            { title: ".Маски", code: "000031", number: "03020300", last: true },
            {
              title: ".Незмивні засоби",
              code: "000032",
              number: "03020400",
              level: "3",
            },
            {
              title: "-Спреї/лосьйони",
              code: "000033",
              number: "03020401",
              last: true,
            },
            {
              title: "-Для кінчиків",
              code: "000034",
              number: "03020402",
              last: true,
            },
            {
              title: "-Сироватки/флюїди/емульсії/еліксири",
              code: "000035",
              number: "03020403",
              last: true,
            },
            {
              title: "-Термозахист",
              code: "000036",
              number: "03020404",
              last: true,
            },
            {
              title: "-Пілінги",
              code: "000037",
              number: "03020405",
              last: true,
            },
            { title: "-Креми", code: "000038", number: "03020406", last: true },
            { title: "-Масло", code: "000039", number: "03020407", last: true },
            {
              title: "-Піни/муси",
              code: "000040",
              number: "03020408",
              last: true,
            },

            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg36.jpg?alt=media&token=b4df2b85-bd8b-4043-ad10-7de71d7261a2",
              code: "000000",
              number: "99999998",
              level: "0",
            },
            {
              title: "#ПРИЗНАЧЕННЯ",
              code: "000041",
              number: "03030000",
              level: "2",
            },
            {
              title: "-Відновлення",
              code: "000042",
              number: "03030001",
              last: true,
            },
            {
              title: "-Лікування",
              code: "000043",
              number: "03030002",
              last: true,
            },
            { title: "-Об'єм", code: "000044", number: "03030003", last: true },
            {
              title: "-Гладкість",
              code: "000045",
              number: "03030004",
              last: true,
            },
            {
              title: "-Кучеряве волосся",
              code: "000046",
              number: "03030005",
              last: true,
            },
            {
              title: "-Для блонду",
              code: "000047",
              number: "03030006",
              last: true,
            },
            {
              title: "-Зволоження",
              code: "000048",
              number: "03030007",
              last: true,
            },
            {
              title: "-Фарбоване волосся",
              code: "000049",
              number: "03030008",
              last: true,
            },
            {
              title: "-Фарбуючі та анти-жовті засоби",
              code: "000050",
              number: "03030009",
              last: true,
            },
            {
              title: "-Захист волосся від сонця",
              code: "000051",
              number: "03030010",
              last: true,
            },
            {
              title: "-Для довгого волосся",
              code: "000052",
              number: "03030011",
              last: true,
            },
            {
              title: "-Для щоденного використання",
              code: "000053",
              number: "03030012",
              last: true,
            },
            {
              title: "-Чоловікам",
              code: "000054",
              number: "03030013",
              last: true,
            },
            { title: "-Дітям", code: "000055", number: "03030014", last: true },

            {
              title: "#КАТЕГОРІЇ ДЛЯ СТАЙЛІНГУ",
              code: "000056",
              number: "03040000",
              level: "2",
            },
            {
              title: "-Для об'єму",
              code: "000057",
              number: "03040001",
              last: true,
            },
            {
              title: "-Для гладкості",
              code: "000058",
              number: "03040002",
              last: true,
            },
            {
              title: "-Для текстури",
              code: "000059",
              number: "03040003",
              last: true,
            },
            {
              title: "-Для фіксації зачіски",
              code: "000060",
              number: "03040004",
              last: true,
            },
            {
              title: "-Для випрямлення",
              code: "000061",
              number: "03040005",
              last: true,
            },
            {
              title: "-Для кучерів",
              code: "000062",
              number: "03040006",
              last: true,
            },
            {
              title: "-Для блиску",
              code: "000063",
              number: "03040007",
              last: true,
            },
            {
              title: "-Для чоловіків",
              code: "000064",
              number: "03040008",
              last: true,
            },
            {
              title: "-Праймери/Термозахист",
              code: "000065",
              number: "03040009",
              last: true,
            },

            {
              title: "#СТАЙЛІНГ",
              code: "000066",
              number: "03050000",
              level: "2",
            },
            { title: "-Лаки", code: "000110", number: "03050001", last: true },
            {
              title: "-Піни/муси",
              code: "000067",
              number: "03050002",
              last: true,
            },
            {
              title: "-Спреї/лосьйони",
              code: "000069",
              number: "03050003",
              last: true,
            },
            {
              title: "-Термозахист/праймери",
              code: "000070",
              number: "03050004",
              last: true,
            },
            {
              title: "-Воски/помади",
              code: "000071",
              number: "03050005",
              last: true,
            },
            { title: "-Гелі", code: "000072", number: "03050006", last: true },
            {
              title: "-Паста/глина",
              code: "000073",
              number: "03050007",
              last: true,
            },
            {
              title: "-Желе/суфле",
              code: "000074",
              number: "03050008",
              last: true,
            },

            { title: "-Пудри", code: "000075", number: "03050009", last: true },
            { title: "-Клеї", code: "000076", number: "03050010", last: true },
            {
              title: "-Крем/молочко",
              code: "000077",
              number: "03050011",
              last: true,
            },
            {
              title: "-Сухі шампуні",
              code: "000078",
              number: "03050012",
              last: true,
            },
            {
              title: "-Сироватки/флюїди/емульсії",
              code: "000079",
              number: "03050013",
              last: true,
            },

            {
              title: "#АКСЕСУАРИ",
              code: "000080",
              number: "03060000",
              level: "2",
            },
            {
              title: ".Для фарбування",
              code: "000081",
              number: "03060100",
              level: "3",
            },
            {
              title: "-Пензлики для фарбування",
              code: "000082",
              number: "03060101",
              last: true,
            },
            {
              title: "-Мисочки та шейкери",
              code: "000083",
              number: "03060102",
              last: true,
            },
            {
              title: "-Вінчики та шпателі",
              code: "000084",
              number: "03060103",
              last: true,
            },
            {
              title: "-Фартухи",
              code: "000085",
              number: "03060104",
              last: true,
            },
            {
              title: "-Коміри",
              code: "000086",
              number: "03060105",
              last: true,
            },
            {
              title: "-Пеньюари",
              code: "000087",
              number: "03060106",
              last: true,
            },
            {
              title: "-Перукарські зажими",
              code: "000088",
              number: "03060107",
              last: true,
            },
            {
              title: "-Фольга",
              code: "000089",
              number: "03060108",
              last: true,
            },
            {
              title: "-Гребінці",
              code: "000090",
              number: "03060109",
              last: true,
            },
            { title: "-Ваги", code: "000091", number: "03060110", last: true },
            {
              title: "-Ключики для фарби",
              code: "000092",
              number: "03060111",
              last: true,
            },
            {
              title: "-Розпирскувачі",
              code: "000093",
              number: "03060112",
              last: true,
            },
            {
              title: "-Рукавички",
              code: "000094",
              number: "03060113",
              last: true,
            },
            {
              title: "-Шапочки для мелірування",
              code: "000095",
              number: "03060114",
              last: true,
            },
            {
              title: ".Бігуді і папілоти",
              code: "000096",
              number: "03060200",
              last: true,
            },
            {
              title: ".Краби і зажими",
              code: "000097",
              number: "03060300",
              last: true,
            },
            {
              title: ".Резинки та шпильки",
              code: "000098",
              number: "03060400",
              last: true,
            },
            {
              title: ".Фени, дифузори, праски",
              code: "000099",
              number: "03060500",
              last: true,
            },
            {
              title: ".Ножиці для стрижки",
              code: "000100",
              number: "03060600",
              last: true,
            },
            {
              title: ".Щітки і розчіски",
              code: "000101",
              number: "03060700",
              level: "3",
            },
            {
              title: "-Щітки для укладки",
              code: "000102",
              number: "03060701",
              last: true,
            },
            {
              title: "-Масажні щітки",
              code: "000103",
              number: "03060702",
              last: true,
            },
            {
              title: "-Гребінці",
              code: "000104",
              number: "03060703",
              last: true,
            },
            {
              title: "-Чоловічі",
              code: "000105",
              number: "03060704",
              last: true,
            },
            {
              title: "-Дитячі",
              code: "000106",
              number: "03060705",
              last: true,
            },
            {
              title: "-Компактні",
              code: "000107",
              number: "03060706",
              last: true,
            },

            { title: ".Ваги", code: "000108", number: "03060800", last: true },
            { title: ".Інше", code: "000109", number: "03060900", last: true },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fkapris%2Fimg34.jpg?alt=media&token=6ef63bc3-9636-4049-94d7-2f1ddfb7c52d",
              code: "00000",
              number: "99999999",
              level: "0",
            },
          ],
        },
        //********* */  "нiгтi"
        {
          title: "нiгтi",
          order: "04",
          code: "000207",

          number: "04000000",
          submenuItemsInColumn: {
            first: "11",
            second: "12",
            third: "25",
            forth: "26",
            fifth: "41",
            sixth: "",
          },
          subMenu: [
            /*  {
              title: "#НІГТІ",
              code: "000171",
              number: "04010000",
              level: "2",
            }, */
            {
              title: ".Лікувальні та укріплюючі засоби",
              code: "000172",
              number: "04000100",
              last: true,
            },

            {
              title: ".Догляд за кутикулою",
              code: "000173",
              number: "04000200",
              last: false,
            },
            {
              title: "-Засоби для видалення кутикули",
              code: "000174",
              number: "04000201",
              last: true,
            },
            {
              title: "-Засоби для змякчення кутикули",
              code: "000175",
              number: "04000202",
              last: true,
            },
            {
              title: ".Засоби для покриття нігтів лаком",
              code: "000176",
              number: "04000300",
              level: "3",
            },
            {
              title: "-Знежирювачі",
              code: "000177",
              number: "04000301",
              last: true,
            },
            {
              title: "-Основи",
              code: "000178",
              number: "04000302",
              last: true,
            },
            {
              title: "-Лаки для нігтів",
              code: "000179",
              number: "04000303",
              last: true,
            },
            {
              title: "-Закріплювачі",
              code: "000180",
              number: "04000304",
              last: true,
            },
            {
              title: "-Прискорювачі сушіння",
              code: "000181",
              number: "04000305",
              last: true,
            },
            {
              title: "-Засоби для зняття лаку",
              code: "000182",
              number: "04000306",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg31.jpg?alt=media&token=77f56afa-37fb-4233-9ad1-5559b5967416",
              number: "99999987",
            },

            {
              title: ".Нарощування і покриття нігтів гелем",
              code: "000183",
              number: "04000400",
              level: "3",
            },
            {
              title: "-Лампи",
              code: "000184",
              number: "04000401",
              last: true,
            },
            {
              title: "-Гелі-архітектори",
              code: "000185",
              number: "04000402",
              last: true,
            },
            {
              title: "-Знежирювачі",
              code: "000186",
              number: "04000403",
              last: true,
            },
            {
              title: "-Підготовлювачі",
              code: "000187",
              number: "04000404",
              last: true,
            },
            {
              title: "-Праймери",
              code: "000188",
              number: "04000405",
              last: true,
            },
            {
              title: "-Бази",
              code: "000189",
              number: "04000406",
              last: true,
            },
            {
              title: "-Гель-лаки",
              code: "000190",
              number: "04000407",
              last: true,
            },
            {
              title: "-Топи",
              code: "000191",
              number: "04000408",
              last: true,
            },
            {
              title: "-Засоби для зняття липкого шару",
              code: "000192",
              number: "04000409",
              last: true,
            },
            {
              title: "-Засоби для зняття гель-лаку",
              code: "000193",
              number: "04000410",
              last: true,
            },
            {
              title: "-Стартові набори",
              code: "000194",
              number: "04000411",
              last: true,
            },
            {
              title: "-Iнше",
              code: "000447",
              number: "04000412",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fmakeupmakeup2.jpg?alt=media&token=c117ff15-e225-450e-b578-6b2c2b95eaa7",
              number: "99999986",
            },
            {
              title: ".Інструменти для манікюру та педікюру",
              code: "000195",
              number: "04000500",
              level: "3",
            },
            {
              title: "-Пилочки",
              code: "000196",
              number: "04000501",
              last: true,
            },
            {
              title: "-Кусачки",
              code: "000197",
              number: "04000502",
              last: true,
            },
            {
              title: "-Ножиці",
              code: "000198",
              number: "04000503",
              last: true,
            },
            {
              title: "-Кніпери",
              code: "000199",
              number: "04000504",
              last: true,
            },
            {
              title: "-Лопатки і кюретки",
              code: "000200",
              number: "04000505",
              last: true,
            },
            {
              title: "-Дерев'яні палички",
              code: "000201",
              number: "04000506",
              last: true,
            },
            {
              title: "-Терки та пемзи",
              code: "000202",
              number: "04000507",
              last: true,
            },
            {
              title: "-Щітки",
              code: "000203",
              number: "04000508",
              last: true,
            },
            {
              title: "-Набори інструментів",
              code: "000204",
              number: "04000509",
              last: true,
            },
            {
              title: "-Чохли для інструментів",
              code: "000205",
              number: "04000510",
              last: true,
            },
            {
              title: ".Аксесуари",
              code: "000206",
              number: "04000600",
              last: true,
            },
          ],
        },
        //********* */  "догляд за шкiрою",
        {
          title: "догляд за шкiрою",
          order: "05",
          code: "000209",
          number: "05000000",
          submenuItemsInColumn: {
            first: "1",
            second: "17",
            third: "29",
            forth: "45",
            fifth: "64",
            sixth: "110",
          },
          subMenu: [
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-27_07-48-21.jpg?alt=media&token=fea4c8b9-f5f4-4e2d-96e7-ffb21a85b7e7",
              code: "00000",
              number: "99999995",
              level: "0",
            },
            {
              title: "#ОБЛИЧЧЯ",
              code: "000108",
              number: "05010000",
              level: "2",
            },
            {
              title: ".Зволоження та живлення",
              code: "000109",
              number: "05010100",
              level: "3",
            },
            {
              title: "-Креми та гелі  денні",
              code: "000110",
              number: "05010101",
              last: true,
            },
            {
              title: "-Креми нічні",
              code: "000111",
              number: "05010102",
              last: true,
            },
            {
              title: "-Креми для шкіри навколо очей",
              code: "000112",
              number: "05010103",
              last: true,
            },
            {
              title: "-Сироватки/бустери/філлери",
              code: "000113",
              number: "05010104",
              last: true,
            },
            {
              title: "-Маски",
              code: "000114",
              number: "05010105",
              last: true,
            },
            {
              title: ".Очищення обличчя",
              code: "000115",
              number: "05010200",
              level: "3",
            },
            {
              title: "-Гелі та піни для вмивання",
              code: "000116",
              number: "05010201",
              last: true,
            },
            {
              title: "-Міцелярні води",
              code: "000117",
              number: "05010202",
              last: true,
            },
            {
              title: "-Тоніки/лосьйони/молочко",
              code: "000118",
              number: "05010203",
              last: true,
              last: true,
            },
            {
              title: "-Демакіяж",
              code: "000119",
              number: "05010204",
              last: true,
            },
            {
              title: "-Пілінги та скраби",
              code: "000120",
              number: "05010205",
              last: true,
            },
            {
              title: "-Очищуючі маски",
              code: "000121",
              number: "05010206",
              last: true,
            },
            {
              title: "-Спонжі для очищення",
              code: "000122",
              number: "05010207",
              last: true,
            },
            {
              title: ".Захист від сонця",
              code: "000123",
              number: "05010300",
              last: true,
            },
            {
              title: ".Догляд за губами",
              code: "000124",
              number: "05010400",
              level: "3",
            },
            {
              title: "-Бальзами",
              code: "000125",
              number: "05010401",
              last: true,
            },
            {
              title: "-Креми/сироватки",
              code: "000126",
              number: "05010402",
              last: true,
            },
            {
              title: "-Скраби",
              code: "000127",
              number: "05010403",
              last: true,
            },
            {
              title: ".Аксесуари для косметичних процедур",
              code: "000128",
              number: "05010500",
              level: "3",
            },
            {
              title: "-Косметологічні інструменти",
              code: "000129",
              number: "05010501",
              last: true,
            },
            {
              title: "-Пензлики для нанесення масок",
              code: "000130",
              number: "05010502",
              last: true,
            },
            {
              title: "-Миски та набори для масок",
              code: "000131",
              number: "05010503",
              last: true,
            },
            {
              title: "-Спонжі для вмивання",
              code: "000132",
              number: "05010504",
              last: true,
            },
            {
              title: ".Догляд за бровами та віями",
              code: "000133",
              number: "05010600",
              level: "3",
            },
            {
              title: "-Сироватки для росту та укріплення",
              code: "000134",
              number: "05010601",
              last: true,
            },
            {
              title: "-Фарбування вій і брів",
              code: "000135",
              number: "05010602",
              last: true,
            },
            {
              title: "#ТІЛО",
              code: "000136",
              number: "05020000",
              level: "2",
            },
            {
              title: ".Для душу та ванни",
              code: "000137",
              number: "05020100",
              level: "3",
            },
            {
              title: "-Гелі для душу",
              code: "000138",
              number: "05020101",
              last: true,
            },
            {
              title: "-Скраби і пілінги",
              code: "000139",
              number: "05020102",
              last: true,
            },
            {
              title: "-Піни для ванни",
              code: "000140",
              number: "05020103",
              last: true,
            },
            {
              title: "-Мочалки для душу",
              code: "000141",
              number: "05020104",
              last: true,
            },
            {
              title: ".Живлення та зволоження шкіри",
              code: "000142",
              number: "05020200",
              level: "3",
            },
            {
              title: "-Лосьйони",
              code: "000143",
              number: "05020201",
              last: true,
            },
            {
              title: "-Креми",
              code: "000144",
              number: "05020202",
              last: true,
            },
            {
              title: "-Олії",
              code: "000145",
              number: "05020203",
              last: true,
            },
            {
              title: ".Антицелюлітні засоби",
              code: "000146",
              number: "05020300",
              last: true,
            },
            {
              title: ".Захист від сонця",
              code: "000147",
              number: "05020400",
              last: true,
            },
            {
              title: ".Засоби для засмаги",
              code: "000148",
              number: "05020500",
              last: true,
            },
            {
              title: ".Догляд за руками",
              code: "000149",
              number: "05020600",
              level: "3",
            },
            {
              title: "-Креми для рук",
              code: "000150",
              number: "05020601",
              last: true,
            },
            {
              title: "-Пілінг",
              code: "000151",
              number: "05020602",
              last: true,
            },
            {
              title: "-Лікувальні креми",
              code: "000152",
              number: "05020603",
              last: true,
            },
            {
              title: "-Маски для рук",
              code: "000153",
              number: "05020604",
              last: true,
            },
            {
              title: "-Олії для рук і кутикули",
              code: "000154",
              number: "05020605",
              last: true,
            },
            {
              title: "-Спеціальні засоби",
              code: "000155",
              number: "05020606",
              last: true,
            },
            {
              title: ".Догляд за ногами",
              code: "000156",
              number: "05020700",
              level: "3",
            },
            {
              title: "-Крем для ступнів",
              code: "000157",
              number: "05020701",
              last: true,
            },
            {
              title: "-Пілінг",
              code: "000158",
              number: "05020702",
              last: true,
            },
            {
              title: "-Лікувальні креми",
              code: "000159",
              number: "05020703",
              last: true,
            },
            {
              title: "-Пемзи і терки для ступнів",
              code: "000160",
              number: "05020704",
              last: true,
            },
            {
              title: "-Спеціальні засоби",
              code: "000161",
              number: "05020705",
              last: true,
            },
            {
              title: ".Депіляція",
              code: "000162",
              number: "05020800",
              level: "3",
            },
            {
              title: "-Креми та гелі",
              code: "000163",
              number: "05020801",
              last: true,
            },
            {
              title: "-Воскова депіляція",
              code: "000164",
              number: "05020802",
              last: true,
            },
            {
              title: "-Шугаринг",
              code: "000165",
              number: "05020803",
              last: true,
            },
            {
              title: ".Дезодоранти",
              code: "000166",
              number: "05020900",
              level: "3",
            },
            {
              title: "-Спреї",
              code: "000167",
              number: "05020901",
              last: true,
            },
            {
              title: "-Роликові",
              code: "000168",
              number: "05020902",
              last: true,
            },
            {
              title: "-Стіки",
              code: "000169",
              number: "05020903",
              last: true,
            },
            {
              title: "-Креми",
              code: "000170",
              number: "05020904",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2018-11-26_11-15-48.jpg?alt=media&token=6093755e-4e44-4fb6-a360-903b65bd544d",
              code: "99999993",
              number: "",
              level: "4",
            },
          ],
        },
        //********* */  "чоловiкам",
        {
          title: "чоловiкам",
          order: "06",
          code: "000305",
          number: "06000000",
          submenuItemsInColumn: {
            first: "15",
            second: "16",
            third: "27",
            forth: "28",
            fifth: "39",
            sixth: "",
          },
          subMenu: [
            {
              title: ".Парфуми",
              code: "000306",
              number: "06000100",
            },
            {
              title: "-Чоловічі",
              code: "000307",
              number: "06000101",
              last: true,
            },
            {
              title: "-Нішеві",
              code: "000308",
              number: "06000102",
              last: true,
            },
            {
              title: "-Унісекс",
              code: "000309",
              number: "06000103",
              last: true,
            },
            {
              title: ".Для волосся",
              code: "000310",
              number: "06000200",
            },
            {
              title: "-Шампуні",
              code: "000311",
              number: "06000201",
              last: true,
            },
            {
              title: "-Лікувальні лосьйони,сироватки,скраби",
              code: "000312",
              number: "06000202",
              last: true,
            },
            {
              title: "-Стайлінг",
              code: "000313",
              number: "06000203",
              last: true,
            },
            {
              title: "-Чоловічі фарби для волосся",
              code: "000314",
              number: "06000204",
              last: true,
            },
            {
              title: "-Щітки і гребінці",
              code: "000315",
              number: "06000205",
              last: true,
            },
            {
              title: ".Гоління",
              code: "000316",
              number: "06000300",
            },
            {
              title: "-Засоби для гоління",
              code: "000317",
              number: "06000301",
              last: true,
            },
            {
              title: "-Догляд після гоління",
              code: "000318",
              number: "06000302",
              last: true,
            },
            {
              title: "-Станки,бритви і змінні картриджi",
              code: "000319",
              number: "06000303",
              last: true,
            },
            {
              title: "-Аксесуари",
              code: "000320",
              number: "06000304",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-27_04-33-13.jpg?alt=media&token=585da9d7-6d60-428e-9521-d30fc11d49fb",
              number: "99999984",
            },
            {
              title: ".Для бороди і вусів",
              code: "000321",
              number: "06000400",
              last: true,
            },
            {
              title: ".Для душу",
              code: "000322",
              number: "06000500",
            },
            {
              title: "-Гелі для душу",
              code: "000323",
              number: "06000501",
              last: true,
            },
            {
              title: "-Піни для ванни",
              code: "000324",
              number: "06000502",
              last: true,
            },
            {
              title: "-Мочалки",
              code: "000325",
              number: "06000503",
              last: true,
            },
            {
              title: ".Дезодоранти",
              code: "000326",
              number: "06000600",
            },
            {
              title: "-Спреї",
              code: "000327",
              number: "06000601",
              last: true,
            },
            {
              title: "-Стіки",
              code: "000328",
              number: "06000602",
              last: true,
            },
            {
              title: "-Кулькові",
              code: "000329",
              number: "06000603",
              last: true,
            },
            {
              title: ".Догляд за шкірою",
              code: "000330",
              number: "06000700",
              last: true,
            },
            {
              title: ".Набори",
              code: "000331",
              number: "06000800",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Fhomepage%2Fimg23.jpg?alt=media&token=09f8ba0e-acf2-4b37-8164-fe00d0911393",
              number: "99999985",
            },
            {
              title: ".Аксесуари",
              code: "000332",
              number: "06000900",
            },
            {
              title: "-Щітки і гребні",
              code: "000333",
              number: "06000901",
              last: true,
            },
            {
              title: "-Манікюрні інструменти",
              code: "000334",
              number: "06000902",
              last: true,
            },
            {
              title: "-Помазки",
              code: "000335",
              number: "06000903",
              last: true,
            },
            {
              title: "-Для бороди",
              code: "000336",
              number: "06000904",
              last: true,
            },
            {
              title: "-Мочалки",
              code: "000337",
              number: "06000905",
              last: true,
            },
            {
              title: "-Терки педикюрні",
              code: "000338",
              number: "06000906",
              last: true,
            },
            {
              title: "-Дзеркала",
              code: "000339",
              number: "06000907",
              last: true,
            },
            {
              title: "-Чоловічі косметички",
              code: "000340",
              number: "06000908",
              last: true,
            },
          ],
        },
        //********* */  "дiтям",
        {
          title: "дiтям",
          order: "07",
          code: "000341",
          number: "07000000",
          submenuItemsInColumn: {
            first: "1",
            second: "8",
            third: "9",
            forth: "17",
            fifth: "18",
            sixth: "",
          },
          subMenu: [
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-27_07-28-21.jpg?alt=media&token=caf7ad6b-3085-4acd-9fe5-aa63eb814a4f",
              number: "99999981",
            },
            {
              title: ".Парфуми для дітей",
              code: "000342",
              number: "07000100",
              last: true,
            },
            {
              title: ".Дезодоранти для дітей",
              code: "000343",
              number: "07000200",
              last: true,
            },
            {
              title: ".Для купання",
              code: "000344",
              number: "07000300",
              last: true,
            },
            {
              title: ".Креми для рук і тіла",
              code: "000345",
              number: "07000400",
              last: true,
            },
            {
              title: ".Бальзами для губ",
              code: "000346",
              number: "07000500",
              last: true,
            },
            {
              title: ".Зубні пасти і щітки",
              code: "000347",
              number: "07000600",
              last: true,
            },
            {
              title: ".Дитячий макіяж",
              code: "000348",
              number: "07000700",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-27_07-09-05.jpg?alt=media&token=acf0e2aa-dd8c-4275-b599-e47b6f213e32",
              number: "99999983",
            },
            {
              title: ".Для волосся",
              code: "000349",
              number: "07000800",
            },
            {
              title: "-Шампуні",
              code: "000350",
              number: "07000801",
              last: true,
            },
            {
              title: "-Бальзами",
              code: "000351",
              number: "07000802",
              last: true,
            },
            {
              title: "-Спреї",
              code: "000352",
              number: "07000803",
              last: true,
            },
            {
              title: "-Фарбуючі засоби",
              code: "000353",
              number: "07000804",
              last: true,
            },
            {
              title: "-Щітки та аксесуари",
              code: "000354",
              number: "07000805",
              last: true,
            },
            {
              title: ".Набори",
              code: "000355",
              number: "07000900",
              last: true,
            },
            {
              title: ".Аксесуари",
              code: "000356",
              number: "07001000",
              last: true,
            },

            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-05-27_07-16-32.jpg?alt=media&token=fcdefa99-ddb2-44c6-9ae5-710945fdba6b",
              number: "99999982",
            },
          ],
        },
        //********* */  "аксесуари",
        {
          title: "аксесуари",
          order: "08",
          code: "000357",
          number: "08000000",
          submenuItemsInColumn: {
            first: "18",
            second: "29",
            third: "58",
            forth: "71",
            fifth: "115",
            sixth: "130",
          },
          subMenu: [
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-06-29_12-46-58.jpg?alt=media&token=6fed73a6-547f-4dd8-bb98-9b5c1d5a3f44",
              number: "99999979",
            },
            { title: "#Нанесення макіяжу", code: "000358", number: "08010000" },
            {
              title: ".Аплікатори",
              code: "000359",
              number: "08010100",
              last: true,
            },
            { title: ".Пензлики", code: "000360", number: "08010200" },
            {
              title: "-Для тіней",
              code: "000361",
              number: "08010201",
              last: true,
            },
            {
              title: "-Для брів",
              code: "000362",
              number: "08010202",
              last: true,
            },
            {
              title: "-Для вій",
              code: "000363",
              number: "08010203",
              last: true,
            },
            {
              title: "-Для підводки",
              code: "000364",
              number: "08010204",
              last: true,
            },
            {
              title: "-Для тональних основ",
              code: "000365",
              number: "08010205",
              last: true,
            },
            {
              title: "-Для контурінгу",
              code: "000366",
              number: "08010206",
              last: true,
            },
            {
              title: "-Для рідких скульпторів",
              code: "000367",
              number: "08010207",
              last: true,
            },
            {
              title: "-Для пудри",
              code: "000368",
              number: "08010208",
              last: true,
            },
            {
              title: "-Для рум'ян",
              code: "000369",
              number: "08010209",
              last: true,
            },
            {
              title: "-Для губ",
              code: "000370",
              number: "08010210",
              last: true,
            },
            {
              title: ".Спонжі",
              code: "000371",
              number: "08010300",
              last: true,
            },
            {
              title: ".Пуховки для пудри",
              code: "000372",
              number: "08010400",
              last: true,
            },
            {
              title: ".Набори пензлів",
              code: "000373",
              number: "08010500",
              last: true,
            },
            {
              title: ".Пінцети",
              code: "000374",
              number: "08010600",
              last: true,
            },
            { title: "#Зняття макіяжу", code: "000375", number: "08020000" },
            {
              title: ".Спонжі для демакіяжу",
              code: "000376",
              number: "08020100",
              last: true,
            },
            {
              title: ".Серветки для демакіяжу",
              code: "000377",
              number: "08020200",
              last: true,
            },

            { title: "#Накладні вії", code: "000378", number: "08030000" },
            {
              title: ".Пучкові вії",
              code: "000379",
              number: "08030100",
              last: true,
            },
            {
              title: ".Комплекти вій",
              code: "000380",
              number: "08030200",
              last: true,
            },
            {
              title: ".Клей для вій",
              code: "000381",
              number: "08030300",
              last: true,
            },
            {
              title: ".Ремувер",
              code: "000382",
              number: "08030400",
              last: true,
            },
            {
              title: ".Пінцети",
              code: "000383",
              number: "08030500",
              last: true,
            },
            { title: ".Інше", code: "000384", number: "08030600", last: true },
            /* {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-06-29_12-44-20.jpg?alt=media&token=da503cde-0293-4e43-bb16-0f07d0cfad9f",
              number: "99999980",
            }, */
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-06-29_12-45-14.jpg?alt=media&token=3edb8f9f-473c-4c1e-ad84-dccb5a93babe",
              number: "99999976",
            },
            { title: "#Для волосся", code: "000385", number: "08040000" },
            { title: ".Для фарбування", code: "000386", number: "08040100" },
            {
              title: "-Пензлики для фарбування",
              code: "000387",
              number: "08040101",
              last: true,
            },
            {
              title: "-Мисочки та шейкери",
              code: "000388",
              number: "08040102",
              last: true,
            },
            {
              title: "-Вінчики та шпателі",
              code: "000389",
              number: "08040103",
              last: true,
            },
            {
              title: "-Фартухи",
              code: "000390",
              number: "08040104",
              last: true,
            },
            {
              title: "-Коміри",
              code: "000391",
              number: "08040105",
              last: true,
            },
            {
              title: "-Пеньюари",
              code: "000392",
              number: "08040106",
              last: true,
            },
            {
              title: "-Перукарські зажими",
              code: "000393",
              number: "08040107",
              last: true,
            },
            {
              title: "-Фольга",
              code: "000394",
              number: "08040108",
              last: true,
            },
            {
              title: "-Гребінці",
              code: "000395",
              number: "08040109",
              last: true,
            },
            { title: "-Ваги", code: "000396", number: "08040110", last: true },
            {
              title: "-Ключики для фарби",
              code: "000397",
              number: "08040111",
              last: true,
            },
            {
              title: "-Розпирскувачі",
              code: "000398",
              number: "08040112",
              last: true,
            },
            {
              title: "-Рукавички",
              code: "000399",
              number: "08040113",
              last: true,
            },
            {
              title: "-Шапочки для мелірування",
              code: "000400",
              number: "08040114",
              last: true,
            },
            { title: "-Інше", code: "000401", number: "08040115", last: true },
            {
              title: ".Бігуді і папілоти",
              code: "000402",
              number: "08040200",
              last: true,
            },
            {
              title: ".Краби і зажими",
              code: "000403",
              number: "08040300",
              last: true,
            },
            {
              title: ".Резинки та шпильки",
              code: "000404",
              number: "08040400",
              last: true,
            },
            {
              title: ".Фени, дифузори, праски",
              code: "000405",
              number: "08040500",
              last: true,
            },
            {
              title: ".Ножиці для стрижки",
              code: "000406",
              number: "08040600",
              last: true,
            },
            { title: ".Щітки і розчіски", code: "000407", number: "08040700" },
            {
              title: "-Щітки для укладки",
              code: "000408",
              number: "08040701",
              last: true,
            },
            {
              title: "-Масажні щітки",
              code: "000409",
              number: "08040702",
              last: true,
            },
            {
              title: "-Гребінці",
              code: "000410",
              number: "08040703",
              last: true,
            },
            {
              title: "-Чоловічі",
              code: "000411",
              number: "08040704",
              last: true,
            },
            {
              title: "-Дитячі",
              code: "000412",
              number: "08040705",
              last: true,
            },
            {
              title: "-Компактні",
              code: "000413",
              number: "08040706",
              last: true,
            },
            {
              title: "#Для манікюру та педікюру",
              code: "000414",
              number: "08050000",
            },
            {
              title: ".Пилочки",
              code: "000415",
              number: "08050100",
              last: true,
            },
            {
              title: ".Кусачки",
              code: "000416",
              number: "08050200",
              last: true,
            },
            {
              title: ".Ножиці",
              code: "000417",
              number: "08050300",
              last: true,
            },
            {
              title: ".Кніпери",
              code: "000418",
              number: "08050400",
              last: true,
            },
            {
              title: ".Лопатки і кюретки",
              code: "000419",
              number: "08050500",
              last: true,
            },
            {
              title: ".Дерев'яні палички",
              code: "000420",
              number: "08050600",
              last: true,
            },
            {
              title: ".Терки та пемзи",
              code: "000421",
              number: "08050700",
              last: true,
            },
            { title: ".Щітки", code: "000422", number: "08050800", last: true },
            {
              title: ".Набори інструментів",
              code: "000423",
              number: "08050900",
              last: true,
            },
            {
              title: ".Чохли для інструментів",
              code: "000424",
              number: "08051000",
              last: true,
            },
            { title: ".Інше", code: "000425", number: "08051100", last: true },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-06-29_12-52-57.jpg?alt=media&token=5823c67d-92a6-4ba1-a90d-d01e54cc0406",
              number: "99999978",
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-06-29_12-51-10.jpg?alt=media&token=0ce026f4-d794-4dc1-a2d9-96bda2360208",
              number: "99999977",
            },
            {
              title: "#Для косметичних процедур",
              code: "000426",
              number: "08060000",
            },
            {
              title: ".Косметологічні інструменти",
              code: "000427",
              number: "08060100",
              last: true,
            },
            {
              title: ".Пензлики для нанесення масок",
              code: "000428",
              number: "08060200",
              last: true,
            },
            {
              title: ".Миски та набори для масок",
              code: "000429",
              number: "08060300",
              last: true,
            },
            {
              title: ".Спонжі для вмивання",
              code: "000430",
              number: "08060400",
              last: true,
            },
            {
              title: "#Депіляція",
              code: "000431",
              number: "08070000",
              last: true,
            },
            {
              title: "#Мочалки",
              code: "000432",
              number: "08080000",
              last: true,
            },
            {
              title: "#Дзеркала",
              code: "000433",
              number: "08090000",
              last: true,
            },
            {
              title: "#Косметички",
              code: "000434",
              number: "08100000",
              last: true,
            },
            {
              title: "#Чоловікам",
              code: "000435",
              number: "08110000",
              last: true,
            },
            { title: "#Дітям", code: "000436", number: "08120000", last: true },
          ],
        },
        //********* */  "подарунки",
        {
          title: "подарунки",
          order: "09",
          code: "000437",
          number: "09000000",
          submenuItemsInColumn: {
            first: "1",
            second: "5",
            third: "6",
            forth: "10",
            fifth: "11",
            sixth: "",
          },
          subMenu: [
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-06-29_13-10-47.jpg?alt=media&token=a84fe46f-1a84-451f-b57f-9af42fdaad92",
              number: "99999975",
            },
            {
              title: ".Парфумерні набори",
              code: "000438",
              number: "09000100",
              last: true,
            },

            {
              title: ".Набори декоративної косметики",
              code: "000439",
              number: "09000200",
              last: true,
            },

            {
              title: ".Манікюрні набори",
              code: "000440",
              number: "09000300",
              last: true,
            },

            {
              title: ".Подарункові сертифікати",
              code: "000441",
              number: "09000400",
              last: true,
            },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-06-29_13-01-33.jpg?alt=media&token=54082e2a-c93f-4cea-a119-e3a284bbc072",
              number: "99999974",
            },
            {
              title: ".Догляд за волоссям",
              code: "000442",
              number: "09000500",
              last: true,
            },

            {
              title: ".Догляд за обличчям",
              code: "000443",
              number: "09000600",
              last: true,
            },

            {
              title: ".Чоловікам",
              code: "000444",
              number: "09000700",
              last: true,
            },
            { title: ".Дітям", code: "000445", number: "09000800", last: true },
            {
              title:
                "https://firebasestorage.googleapis.com/v0/b/justclockit-a0fa1.appspot.com/o/kapris%2Fnavbar%2Fparfum%2Fphoto_2020-06-29_13-13-25.jpg?alt=media&token=d6334ea5-8b31-4b6b-943e-caf91b0122e6",
              number: "99999973",
            },
          ],
        },
      ],
    };
  }

  /*  last
      code: "000447",
      number: "99999973",*/

  /*componentDidMount() {
    const { navbarMenuTest } = this.state;
    console.log(navbarMenuTest, "navbarMenuTest");
    navbarMenuTest.map((mainmenu) => {
      firestore
        .collection("navbarTest")
        .doc()
        .set({ ...mainmenu });
    }); 
  }*/

  render() {
    return (
      <div>
        <div className="navbar">
          <div
            className="toggle-button"
            onClick={() => this.setState({ showSideMenu: true })}
          >
            <div className="bars">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <span className="bars-title">Menu</span>
          </div>
          <div className={this.state.showSideMenu ? "rrt" : "rrt-none"}>
            <div
              className="black-back"
              onClick={() =>
                this.setState({
                  showSideMenu: false,
                  showSideMenuSub: false,
                  showSideMenuSubSub: false,
                })
              }
            ></div>
            <ul className="side-menu">
              <div className="side-menu-title">
                MENU
                <span
                  onClick={() =>
                    this.setState({
                      showSideMenu: false,
                      showSideMenuSub: false,
                      showSideMenuSubSub: false,
                    })
                  }
                >
                  &#10005;
                </span>
              </div>
              {/* Cycle through MAIN Menu - navbar */}
              {this.state.navbarMenuTest.map((element, index) => {
                return (
                  <div key={index}>
                    <div className="side-menu-string">
                      <NavLink
                        to={`/collection/${element.code}`}
                        className="side-menu-navlink"
                        onClick={() => this.setState({ showSideMenu: false })}
                      >
                        {element.title.toUpperCase()}
                      </NavLink>
                      {(this.state.chosenMainMenuNumber === index) &
                      (this.state.showSideMenuSub === true) ? (
                        <span
                          className="side-menu-arrow-active"
                          onClick={() =>
                            this.setState({
                              showSideMenuSub: false,
                              showSideMenuSubSub: false,
                              chosenMainMenuNumber: "",
                            })
                          }
                        >
                          {/*  &#8212; */}
                          &#10094;
                        </span>
                      ) : (
                        <span
                          className="side-menu-arrow"
                          onClick={() =>
                            this.setState({
                              showSideMenuSub: true,
                              chosenMainMenuNumber: index,
                            })
                          }
                        >
                          &#10095;
                        </span>
                      )}
                    </div>

                    {index === this.state.chosenMainMenuNumber &&
                      element.subMenu.map((subMenuElement, ind) =>
                        subMenuElement.number.substring(4, 8) === "0000" ||
                        (subMenuElement.number.substring(2, 4) === "00") &
                          (subMenuElement.number.substring(6, 8) === "00") ? (
                          <div key={ind} className="side-menu-sub">
                            <div
                              className={
                                this.state.showSideMenuSub
                                  ? "show-side-menu-sub"
                                  : "close-side-menu-sub"
                              }
                            >
                              <div className="side-menu-sub-string">
                                <NavLink
                                  to={`/collection/${subMenuElement.code}`}
                                  className="side-menu-navlink"
                                  onClick={() =>
                                    this.setState({
                                      showSideMenu: false,
                                      showSideMenuSub: false,
                                      showSideMenuSubSub: false,
                                    })
                                  }
                                >
                                  {subMenuElement.title.slice(1).toUpperCase()}
                                </NavLink>

                                {(this.state.showSideMenuSubSub === true) &
                                (subMenuElement.number ===
                                  this.state.chosenSubMenuNumber) ? (
                                  <span
                                    className="side-menu-arrow-active sub-arrow"
                                    onClick={() =>
                                      this.setState({
                                        showSideMenuSubSub: false,
                                        chosenSubMenuNumber: "",
                                      })
                                    }
                                  >
                                    &#10094;
                                    {/*  &#8212; */}
                                  </span>
                                ) : (
                                  <div
                                    onClick={() =>
                                      this.setState({
                                        showSideMenuSubSub: true,
                                        chosenSubMenuNumber:
                                          subMenuElement.number,
                                      })
                                    }
                                  >
                                    {!subMenuElement.last ? (
                                      <span className="side-menu-arrow  sub-arrow">
                                        &#10095;
                                      </span>
                                    ) : null}
                                  </div>
                                )}
                              </div>
                            </div>

                            {this.state.showSideMenuSubSub ? (
                              <div>
                                {this.state.chosenSubMenuNumber.substring(
                                  0,
                                  6
                                ) === subMenuElement.number.substring(0, 6)
                                  ? (console.log("YES!!!"),
                                    element.subMenu.map((el1, ind1) => (
                                      <div key={ind1}>
                                        {(this.state.chosenSubMenuNumber.substring(
                                          0,
                                          4
                                        ) ===
                                          el1.number.substring(0, 4)) &
                                        (this.state.chosenSubMenuNumber !==
                                          el1.number) &
                                        (this.state.chosenSubMenuNumber.substring(
                                          4,
                                          8
                                        ) ===
                                          "0000") ? (
                                          <div className="side-menu-sub-sub-string">
                                            <NavLink
                                              to={`/collection/${el1.code}`}
                                              className="side-menu-navlink1"
                                              onClick={() =>
                                                this.setState({
                                                  showSideMenu: false,
                                                  showSideMenuSub: false,
                                                  showSideMenuSubSub: false,
                                                  chosenSubMenuNumber: "",
                                                })
                                              }
                                            >
                                              {el1.title.substring(0, 1) ===
                                              "-" ? (
                                                <div className="tab-tab">
                                                  {el1.title.substring(1)}
                                                </div>
                                              ) : (
                                                <div>
                                                  {el1.title.substring(1)}
                                                </div>
                                              )}
                                              {/*  {el1.title}************ */}
                                            </NavLink>
                                          </div>
                                        ) : (this.state.chosenSubMenuNumber.substring(
                                            0,
                                            6
                                          ) ===
                                            el1.number.substring(0, 6)) &
                                          (this.state.chosenSubMenuNumber !==
                                            el1.number) ? (
                                          <div key={ind1}>
                                            {(this.state.chosenSubMenuNumber.substring(
                                              0,
                                              6
                                            ) ===
                                              el1.number.substring(0, 6)) &
                                            (this.state.chosenSubMenuNumber !==
                                              el1.number) &
                                            (this.state.chosenSubMenuNumber.substring(
                                              2,
                                              4
                                            ) ===
                                              "00") &
                                            (this.state.chosenSubMenuNumber.substring(
                                              6,
                                              8
                                            ) ===
                                              "00") ? (
                                              <div className="side-menu-sub-sub-string">
                                                <NavLink
                                                  to={`/collection/${el1.code}`}
                                                  className="side-menu-navlink"
                                                  onClick={() =>
                                                    this.setState({
                                                      showSideMenu: false,
                                                      showSideMenuSub: false,
                                                      showSideMenuSubSub: false,
                                                      chosenSubMenuNumber: "",
                                                    })
                                                  }
                                                >
                                                  {el1.title.substring(1)}
                                                </NavLink>
                                              </div>
                                            ) : null}
                                          </div>
                                        ) : null}
                                      </div>
                                    )))
                                  : null}
                              </div>
                            ) : null}
                          </div>
                        ) : null
                      )}
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="navbar-links">
            <ul className="navbar-menu">
              {this.state.navbarMenuTest.map((element, index) => {
                return (
                  <li className="navbar-menu-link" key={index}>
                    <NavLink
                      to={`/collection/${element.code}`}
                      className="hover-border"
                      onClick={() => {
                        this.setState({ showSubmenu: false });
                        setTimeout(
                          () => this.setState({ showSubmenu: true }),
                          1500
                        );
                      }}
                    >
                      {element.title.toUpperCase()}
                    </NavLink>

                    {this.state.showSubmenu && (
                      <div className="nav-area1">
                        <div className="main-menu2">
                          <div>
                            <div>
                              <Submenu
                                navbarSubMenu={element.subMenu}
                                submenuItemsInColumn={
                                  element.submenuItemsInColumn
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
