import React, { Component } from "react";
import "./slider3in8.css";
import TopUnit from "./top-unit/TopUnit";

class Slider3in8 extends Component {
  constructor() {
    super();

    this.state = {
      slideChosen: false,
      sectionChosen: "",

      sect3items: {
        section1: [
          {
            title: "Schwarzkopf Professional Osis + Mess Up.",
            description:
              " Віск для волосся з матовим ефектом. Цей віск призначений для укладання і моделювання зачіски, забезпечуючи середню фіксацію і матовий ефект.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-01.jpg?alt=media&token=b745b1aa-c594-4c5d-8b66-6518c2da63e1",
            //imageUrl: "images/homepage-images/hp1.png",
            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "C:EHKO",
            description:
              "Лак-Спрей для волосся сильної фіксації (Діамант [3]) - C:EHKO 400ml",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-02.jpg?alt=media&token=3bf24535-99c0-439f-8940-5bcf5787f4c9",
            //imageUrl: "images/homepage-images/img18.jpg",
            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "Schwarzkopf Professional Osis+ Flatliner",
            description:
              "Спрей для термоукладки волосся Schwarzkopf Professional Osis+ Flatliner.Властивості: забезпечує захист волосся від температури до 200 °C, бореться з неслухняним волоссям, створює тривалий гладенький ефект, захищає волосся від надмірної вологості, зменшує його посічення, середній рівень інтенсивності фіксації зачіски.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-03.jpg?alt=media&token=463c271f-a263-4d3e-bcfe-93bd21df1da2",
            //imageUrl: "images/homepage-images/img17.jpg",
            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section2: [
          {
            title: "Schwarzkopf Bonacure pH 4.5 Color Freeze Silver Shampoo",
            description: "Шампунь придающий серебристый оттенок волосам ",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-04.jpg?alt=media&token=1a152ae2-4759-40ce-85b1-7fb3e0f8ab06",
            //imageUrl: "images/homepage-images/hp1.png",
            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "Schwarzkopf  BC Color Sulfate-Free Shampoo",
            description:
              "Безсульфатний шампунь для фарбованого волосся 250ml, 1000ml",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-05.jpg?alt=media&token=c28e60a3-66d4-4ba3-a3ee-c94cc23b1f4f",
            //imageUrl: "images/homepage-images/img18.jpg",
            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "INDOLA Kera Restore Маска для волосся",
            description:
              "Маска з кератином для волосся kera restore treatment для інтенсивного кератинового відновлення волосся.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-06.jpg?alt=media&token=386d19c6-9630-43e1-ae7a-3e6e70ae669d",
            //imageUrl: "images/homepage-images/img17.jpg",
            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section3: [
          {
            title: "Schwarzkopf Professional BONACURE Moisture",
            description:
              "Зволожуючий двофазний спрей-кондиціонер містить гліцеринові амінокислоти, молочно-протеїновий комплекс і пантенол. Цей склад інгредієнтів сприяє збільшенню вмісту вологи у структурі волосся, розплутує волосся, роблячи його більш слухняними, і значно полегшує процес розчісування.200мл   400мл",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-07.jpg?alt=media&token=b91f98b8-c5f1-488a-bee8-90c00779dba8",
            //imageUrl: "images/homepage-images/hp1.png",
            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "ING Styl-ING Multiaction Spray '10 в 1'",
            description:
              "Швидко діючий мультиспрей Містить олію аргани, олію макадамі, екстракт шовку, насіння льону, активні речовини MFP, морські водорості, протеїни пшениці та амінокислоти кератину. Протеїни зерна, масло макадамі та аргани живлять, відновлюють, і випрямляють зневоднене волосся. Насіння льону та амінокислоти кератину зміцнюють та попереджають формування посічених кінчиків. Екстракт шовку, активні речовини MFP та морські водорості підтримують об`єм, надають блиск та сяйво волоссю та локонам.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-08.jpg?alt=media&token=414b8e73-2562-4205-ae25-aa0d3af27254",
            //imageUrl: "images/homepage-images/img18.jpg",
            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title:
              "CEHKO Зільбервайс сріблясто-білий ополіскувач Silberweiss                                                                                          ",
            description:
              "Концентрований косметичний засіб, який надає анти-жовтий ефект. Підкреслює натуральну елегантність сивого, натурального світлого і освітленого волосся. Завдяки спеціальним компонентам ополіскувач, дозволяє видалити жовтий відтінок з знебарвленого і сивого волосся. Ополіскувач володіє чудовими кондиціонуючими властивостями.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-09.jpg?alt=media&token=f0a071d3-0fe1-44fc-9428-762e60e74789",
            //imageUrl: "images/homepage-images/img17.jpg",
            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section4: [
          {
            title:
              "ESTEL KERATIN комплекс для догляду за пошкодженим волоссям з кератином",
            description:
              "Спеціально розроблена колекція домашнього догляду ESTEL KERATIN швидко відновлює пошкоджене волосся та насищає волосся кератином.Шампунь для волосся ESTEL KERATIN, 250 мл м'яко очищує. Маска для волосся ESTEL KERATIN, 250 мл глибоко проникає у волокно волосини і забезпечує інтенсивну регенерацію зсередини. Кератинова вода для волосся ESTEL KERATIN, 100 мл зволожує, кератинізує, ущільнює, закріплює колір, розгладжує, має антистатичний ефект, забезпечує термозахист та УФ захист, 'запаює кінчики'.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-10.jpg?alt=media&token=c19e8aac-89da-4bfb-92b4-a993fd2f50de",
            //imageUrl: "images/homepage-images/hp1.png",
            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "C:EHKO C:Color Permanent Coloration",
            description:
              "C:EHKO C:Color Крем-фарба для волосся. Аміачна. 100% покриття сивини. 50мл Німеччина.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-11.jpg?alt=media&token=3497aab2-a7ed-47f9-9075-e5185cb2f739",
            //imageUrl: "images/homepage-images/img18.jpg",
            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "Краска для волос Colorianne Prestige Brelil 100 мл",
            description:
              "Brelil Colorianne Prestige Професійна крем-фарба для волосся. Малоаміачна. М'яке фарбування. 100 мл. Італія.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-12.jpg?alt=media&token=a13101b8-305b-4d7b-90ec-a477e917be85",
            //imageUrl: "images/homepage-images/img17.jpg",
            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section5: [
          {
            title:
              "Schwarzkopf Igora Royal и Igora Royal Absolute (для сивини) ",
            description:
              "Професійна аміачна фарба. Стійкі насичені кольори з 100% покриттям сивого волосся. Широка палітра кольорів. Дбайлива формула.  60 мл. Німеччина.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-13.jpg?alt=media&token=841f9d89-0c20-40dc-8e6b-841f445b1cc4",
            //imageUrl: "images/homepage-images/hp1.png",
            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "Refectocil Фарба для брів і вій.",
            description:
              "Стійка професійна аміачна фарба з широким асортиментом віддтінків. 15мл",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-14.jpg?alt=media&token=81fd5623-f157-400e-a49b-497e25b2f200",

            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "Salon Professional 7699",
            description: " Щітка масажна для волосся зі щетиною дикого кабана.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-15.jpg?alt=media&token=2b8d6481-ded0-4bc8-87bf-cf025767cf8a",

            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section6: [
          {
            title: "Staleks",
            description:
              "Staleks зайняв стійку позицію на ринку професійного інструменту. Завдяки якісній іспанській сталі  інструменти характеризуються високою корозійною стійкістю і твердістю, що дозволяє довго зберігати якість заточки.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-16.jpg?alt=media&token=3e2d1380-6f9c-4414-8d21-f48ec0f0ef4b",

            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "Bourjois TWIST UP THE VOLUME ULTRA BLACK",
            description:
              "Туш  для вій <подовження та об'єм>, 8 мл. Інноваційна щіточка, трансформуючись при повороті  кінчика ковпачка, створює ефект довжини, розділяє вії і додає об'єму.     Підходить  для чутливих очей і тим, хто носить контактні лінзи.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-17.jpg?alt=media&token=420b1a6a-8c01-47f4-a6ae-4a5c9ab12b5e",

            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "Пудра-рум’яна Pupa Luminys Baked All Over",
            description:
              "багатофункціональний засіб, з яким ваше обличчя буде сяяти. Чотири кольори, що можна міксувати або ж використовувати окремо. За допомогою цього продукту ви зможете зробити контуринг або ж просто надати шкірі здорового сяйва й красивого кольору.",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-18.jpg?alt=media&token=d0d8a72d-b870-4d9f-b7cd-cb0417bfe379",

            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section7: [
          {
            title: "Bourjois 123 Perfection (Буржуа 123 Перфект)",
            description:
              "BOURJOIS 123 PERFECT Тональна основа. 16 годин стійкості. Вирівняє тон вашої шкіри та замаскує її дрібні недоліки. Без SPF",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-19.jpg?alt=media&token=deb80098-37ed-40bb-9f85-030e00f70fff",

            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "Pupa I'M Matt Lip Fluid матова рідка помада",
            description:
              "Нове покоління помади з оксамитовим, матовим і глибоким інтенсивним відтінком. Ультра-легка, м'яка, сильно пігментована формула. Дуже зручна у користуванні, відразу ж після нанесення розтає на губах і висихає. 4 мл. Італія",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-20.jpg?alt=media&token=e0df1071-1ceb-4fb9-8952-64c274470f45",

            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "TIZIANA TERENZI Andromeda EDP 100 ml",
            description: "",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-21.jpg?alt=media&token=4186f9b4-f8df-4045-83b4-2414a508b1cc",

            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
        section8: [
          {
            title: "Versace Man Eau Fraiche 50ml",
            description: "",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-22.jpg?alt=media&token=69c69d39-558c-4a84-bcda-b7bed0f76a75",

            id: 1,
            linkUrl: "shop/hats",
            size: "xxxl-img",
          },
          {
            title: "LANVIN  A Girl In Capri 90ml",
            description: "",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-23.jpg?alt=media&token=4d80ff9c-4fd6-4b7f-88f0-96000dc7db6a",

            id: 2,
            linkUrl: "shop/jackets",
            size: "xl-img",
          },
          {
            title: "MONTALE  Starry Night  EDP 50мл",
            description: "",
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/cat2-ac7df.appspot.com/o/kapris%2Ftop-sales%2Ftop-sales-24.jpg?alt=media&token=ffb4d6d7-e6b6-4d3a-aeb0-084b0d190bfe",

            id: 3,
            linkUrl: "shop/sneakers",
            size: "s-img",
          },
        ],
      },
    };
  }
  render() {
    const { section1 } = this.state.sect3items;
    const { section2 } = this.state.sect3items;
    const { section3 } = this.state.sect3items;
    const { section4 } = this.state.sect3items;
    const { section5 } = this.state.sect3items;
    const { section6 } = this.state.sect3items;
    const { section7 } = this.state.sect3items;
    const { section8 } = this.state.sect3items;

    if (!this.state.slideChosen) {
      return (
        <div className="grey-fon">
          <div className="container-slider-topsales">
            <div className="title-slider-8">{this.props.sliderName}</div>
            <div className="slider-top">
              <div className="figure">
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    {section1.map((element, index) => {
                      return (
                        <TopUnit
                          key={element.id}
                          imageUrl={element.imageUrl}
                          title={element.title}
                          description={element.description}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    {section2.map((element, index) => {
                      return (
                        <TopUnit
                          key={element.id}
                          imageUrl={element.imageUrl}
                          title={element.title}
                          description={element.description}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    {section3.map((element, index) => {
                      return (
                        <TopUnit
                          key={element.id}
                          imageUrl={element.imageUrl}
                          title={element.title}
                          description={element.description}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    {section4.map((element, index) => {
                      return (
                        <TopUnit
                          key={element.id}
                          imageUrl={element.imageUrl}
                          title={element.title}
                          description={element.description}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    {section5.map((element, index) => {
                      return (
                        <TopUnit
                          key={element.id}
                          imageUrl={element.imageUrl}
                          title={element.title}
                          description={element.description}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    {section6.map((element, index) => {
                      return (
                        <TopUnit
                          key={element.id}
                          imageUrl={element.imageUrl}
                          title={element.title}
                          description={element.description}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    {section7.map((element, index) => {
                      return (
                        <TopUnit
                          key={element.id}
                          imageUrl={element.imageUrl}
                          title={element.title}
                          description={element.description}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="background-image-sl-top">
                  <div className="temp-3">
                    {section8.map((element, index) => {
                      return (
                        <TopUnit
                          key={element.id}
                          imageUrl={element.imageUrl}
                          title={element.title}
                          description={element.description}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className="background-image-sl-top">
                  <div className="temp-3">
                    {section1.map((element, index) => {
                      return (
                        <TopUnit
                          key={element.id}
                          imageUrl={element.imageUrl}
                          title={element.title}
                          description={element.description}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="nnn">
              <input
                type="radio"
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section1",
                  })
                }
                value="true"
              />
              <input
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section2",
                  })
                }
                type="radio"
              />
              <input
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section3",
                  })
                }
                type="radio"
              />
              <input
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section4",
                  })
                }
                type="radio"
              />
              <input
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section5",
                  })
                }
                type="radio"
              />
              <input
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section6",
                  })
                }
                type="radio"
              />
              <input
                type="radio"
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section7",
                  })
                }
              />
              <input
                type="radio"
                onChange={() =>
                  this.setState({
                    slideChosen: true,
                    sectionChosen: "section8",
                  })
                }
              />
              <div className="nnn2">
                <input
                  value="true"
                  onChange={() => {
                    return null;
                  }}
                  type="radio"
                  checked
                />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      switch (this.state.sectionChosen) {
        case "section1":
          return (
            <div className="grey-fon">
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      {section1.map((element, index) => {
                        return (
                          <TopUnit
                            key={element.id}
                            imageUrl={element.imageUrl}
                            title={element.title}
                            description={element.description}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="nnn">
                  <input
                    value="true"
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                    checked
                  />
                  <input
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    value="true"
                    type="radio"
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />

                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                    value="true"
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section5",
                      })
                    }
                    value="true"
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section6",
                      })
                    }
                    value="true"
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section7",
                      })
                    }
                    value="true"
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section8",
                      })
                    }
                    value="true"
                  />
                </div>
              </div>
            </div>
          );
        case "section2":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      {section2.map((element, index) => {
                        return (
                          <TopUnit
                            key={element.id}
                            imageUrl={element.imageUrl}
                            title={element.title}
                            description={element.description}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                    checked
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section5",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section6",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section7",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section8",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        case "section3":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      {section3.map((element, index) => {
                        return (
                          <TopUnit
                            key={element.id}
                            imageUrl={element.imageUrl}
                            title={element.title}
                            description={element.description}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                    checked
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section5",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section6",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section7",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section8",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        case "section4":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      {section4.map((element, index) => {
                        return (
                          <TopUnit
                            key={element.id}
                            imageUrl={element.imageUrl}
                            title={element.title}
                            description={element.description}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    value="st"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                  />
                  <input
                    type="radio"
                    value="st1"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />
                  <input
                    type="radio"
                    value="st2"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                    checked
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section5",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section6",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section7",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section8",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        case "section5":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      {section5.map((element, index) => {
                        return (
                          <TopUnit
                            key={element.id}
                            imageUrl={element.imageUrl}
                            title={element.title}
                            description={element.description}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    value="st"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                  />
                  <input
                    type="radio"
                    value="st1"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />
                  <input
                    type="radio"
                    value="st2"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section5",
                      })
                    }
                    checked
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section6",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section7",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section8",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        case "section6":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      {section6.map((element, index) => {
                        return (
                          <TopUnit
                            key={element.id}
                            imageUrl={element.imageUrl}
                            title={element.title}
                            description={element.description}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    value="st"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                  />
                  <input
                    type="radio"
                    value="st1"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />
                  <input
                    type="radio"
                    value="st2"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section5",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section6",
                      })
                    }
                    checked
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section7",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section8",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        case "section7":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      {section7.map((element, index) => {
                        return (
                          <TopUnit
                            key={element.id}
                            imageUrl={element.imageUrl}
                            title={element.title}
                            description={element.description}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    value="st"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                  />
                  <input
                    type="radio"
                    value="st1"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />
                  <input
                    type="radio"
                    value="st2"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section5",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section6",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section7",
                      })
                    }
                    checked
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section8",
                      })
                    }
                  />
                </div>
              </div>
            </div>
          );
        case "section8":
          return (
            <div className="grey-fon">
              {/*  <div className="container-slider-topsales"> */}
              <div className="container-one-image">
                <div className="slider-one">
                  <div className="background-image-sl-top">
                    <div className="temp-3">
                      {section8.map((element, index) => {
                        return (
                          <TopUnit
                            key={element.id}
                            imageUrl={element.imageUrl}
                            title={element.title}
                            description={element.description}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="nnn">
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section1",
                      })
                    }
                  />
                  <input
                    value="st"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section2",
                      })
                    }
                    type="radio"
                  />
                  <input
                    type="radio"
                    value="st1"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section3",
                      })
                    }
                  />
                  <input
                    type="radio"
                    value="st2"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section4",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section5",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section6",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section7",
                      })
                    }
                  />
                  <input
                    type="radio"
                    onChange={() =>
                      this.setState({
                        slideChosen: true,
                        sectionChosen: "section8",
                      })
                    }
                    checked
                  />
                </div>
              </div>
            </div>
          );
        default:
          console.log("hello");
          return null;
      }
    }
  }
}

export default Slider3in8;
