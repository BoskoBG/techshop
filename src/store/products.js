import { createSlice } from "@reduxjs/toolkit";

import {
  refrigerators,
  audio,
  cameras,
  cellPhoneEquipment,
  cellPhones,
  desktops,
  drones,
  gameConsoles,
  videoGames,
  homeTeather,
  laptops,
  microwaves,
  rangesCooktopsAndOvens,
  tablets,
  tv,
  washingMashines,
} from "../images/categories/categories";

import {
  WAU28T61BYimgArr,
  WAV28EH0BYimgArr,
  F4WV329S0EimgArr,
  WW4500TimgArr,
  WD400TimgArr,
  WAX28MH0BYimgArr,
} from "../images/products/Washers/washers";

import {
  GSJ760WBXVimgArr,
  KSV36BIEPimgArr,
  RB34T672FWWimgArr,
  RB38T600DB1imgArr,
  RC3200FHXimgArr,
} from "../images/products/Refrigerators/refrigerators";
import {
  CEE548SEEWimgArr,
  CV5400SWimgArr,
  CVE6607FEESimgArr,
  HKA090150imgArr,
} from "../images/products/Ranges,Cookers & Ovens/cookers";
import {
  FEL023MS2imgArr,
  MG23A7013CALimgArr,
  MH6535GIHimgArr,
} from "../images/products/Microwaves/microwaves";
import {
  KD55A8BAEPimgArr,
  NANO753PAimgArr,
  QE55LS01TAUXXHimgArr,
  UE43AU7172UXXHimgArr,
  UP75003LFAEUimgArr,
  XR50X90JAEPimgArr,
} from "../images/products/TVs/tvs";

export const initialProductsState = {
  allProducts: [
    {
      category: "Appliances",
      param: "appliances",
      subcategories: [
        {
          name: "Washers",
          img: washingMashines,
          param: "washers",
          products: [
            {
              name: "Samsung Washer-WD400T",
              categoryParam: "appliances",
              subcategoryParam: "washers",
              id: "WD400T",
              images: WD400TimgArr,
              price: 449,
              brand: "samsung",
              spec: {
                color: "white",
                width: "60 cm",
                height: "85 cm",
                depth: "55 cm",
                loadType: "front loading",
                washingCapacity: "8kg",
              },
              desc: [
                "A reliable and efficient washing machine with a capacity of up to 8 kg.",
                "It has excellent drum clean technology.",
                "Spin speed up to 1200 revolutions per minute.",
                "Superior A+++ energy efficiency class.",
                "A system of hygienic frequent use with steam.",
              ],
            },
            {
              name: "Samsung Washer & Dryer-WW4500T",
              categoryParam: "appliances",
              subcategoryParam: "washers",
              id: "WW4500T",
              images: WW4500TimgArr,
              price: 1059,
              brand: "samsung",
              spec: {
                color: "white",
                width: "60 cm",
                height: "85 cm",
                depth: "60 cm",
                loadType: "front loading",
                washingCapacity: "10kg",
              },
              desc: [
                "Combined machine with efficient Bubble technology.",
                "The waashing capacity is 8kg and thedrying capacity is 5kg.",
                "Enabled adding laundry after starting the cycle using the AddWash door.",
                "Drum washing program that removes bacteria and unpleasant odors.",
              ],
            },
            {
              name: "HomeProfessional Washer-WAV28EH0BY",
              categoryParam: "appliances",
              subcategoryParam: "washers",
              id: "WAV28EH0BY",
              images: WAV28EH0BYimgArr,
              categoryParam: "appliances",
              subcategoryParam: "washers",
              price: 1399,
              brand: "bosch",
              spec: {
                color: "white",
                width: "59.8 cm",
                height: "84.8 cm",
                depth: "59 cm",
                loadType: "front loading",
                washingCapacity: "10 kg",
              },
              desc: [
                "Freestanding washing machine with a capacity of 9 kg.",
                "It has the function of child safety protection and the function of adding laundry.",
                "Spin speed from 400 rpm to 1400 rpm.",
                "Automatic dosing of liquid detergent.",
                "Delayed start up to 24 hours",
              ],
            },
            {
              name: "Series 6 Washer,front loading-WAU28T61BY",
              categoryParam: "appliances",
              subcategoryParam: "washers",
              id: "WAU28T61BY",
              images: WAU28T61BYimgArr,
              price: 599,
              brand: "bosch",
              spec: {
                color: "white",
                width: "59.8 cm",
                height: "84.8 cm",
                depth: "59 cm",
                loadType: "front loading",
                washingCapacity: "9 kg",
              },
              desc: [
                "Economical washing machine with LED display for simple and clear program selection.",
                "SpeedPerfect - perfectly cleans laundry while saving up to 65% of washing time.",
                "The function of subsequent addition of laundry during the washing cycle.",
                "Washing capacity of 9 kg.",
              ],
            },
            {
              name: "Series 8 Washer, front loading 10 kg 1400 rpm-WAX28MH0BY",
              categoryParam: "appliances",
              subcategoryParam: "washers",
              id: "WAX28MH0BY",
              images: WAX28MH0BYimgArr,
              price: 999,
              brand: "bosch",
              spec: {
                color: "white",
                width: "59.8 cm",
                height: "84.8 cm",
                depth: "59 cm",
                loadType: "front loading",
                washingCapacity: "10 kg",
              },
              desc: [
                "A very practical machine with a capacity of 10 kg.",
                "Centrifuge speed of 1400 rpm.",
                "It has a flood protection system.",
                "Possibility of delayed start up to 24 hours.",
                "Sound signal at the end of the program.",
              ],
            },
            {
              name: "LG Washer-F4WV329S0E",
              categoryParam: "appliances",
              subcategoryParam: "washers",
              id: "F4WV329S0E",
              images: F4WV329S0EimgArr,
              price: 589,
              brand: "lg",
              spec: {
                color: "white",
                width: "60 cm",
                height: "85 cm",
                depth: "56.5 cm",
                loadType: "front loading",
                washingCapacity: "9 kg",
              },
              desc: [
                "Machine for thorough and gentle washing of clothes.",
                "The AI ??????DD function registers the softness of the fabric and independently selects the optimal movements for the fabric.",
                "Steam technology removes 99.9% of allergens, such as dust mites and dust, which can cause allergies.",
                "Loading capacity up to 9 kg.",
              ],
            },
          ],
        },
        {
          name: "Refrigerators",
          img: refrigerators,
          param: "refrigerators",
          products: [
            {
              name: "Samsung Combined refrigerator-RB38T600DB1",
              id: "RB38T600DB1",
              images: RB38T600DB1imgArr,
              price: 759,
              brand: "samsung",
              spec: {
                color: "black",
                width: "59.5 cm",
                height: "203 cm",
                depth: "65.8 cm",
                volume: "385 l",
                electricityConsumption: "245 kWh",
              },
              desc: [
                "No Frost cooling technology without creating ice.",
                "The inverter compressor offers an extremely quiet mode of operation.",
                "Power Cool and Power Freeze functions for extremely fast cooling and freezing.",
                "The volume of the refrigerator is 273 l, and the freezer is 112 l.",
              ],
            },
            {
              name: "Samsung Combined refrigerator RB34T672FWW",
              id: "RB34T672FWW",
              images: RB34T672FWWimgArr,
              price: 559,
              brand: "samsung",
              spec: {
                color: "white",
                width: "59.5 cm",
                height: "185.3 cm",
                depth: "65.8 cm",
                volume: "340 l",
                electricityConsumption: "300 kWh",
              },
              desc: [
                "Combined refrigerator with a capacity of 340 l with SpaceMax technology.",
                "It has NoFrost cooling technology.",
                "Powerful inverter motor with reduced noise level of 35 dB.",
                "LED lighting for a clear view of the interior.",
                "Work in the event of a power outage until 6 pm.",
              ],
            },
            {
              name: "Bosch Refrigerator with one door KSV36BIEP",
              id: "KSV36BIEP",
              images: KSV36BIEPimgArr,
              price: 1119,
              brand: "bosch",
              spec: {
                color: "silver",
                width: "60 cm",
                height: "186 cm",
                depth: "65 cm",
                volume: "346 l",
              },
              desc: [
                "Freestanding refrigerator with one reversible door.",
                "It has seven extremely strong glass shelves, 4 of which are adjustable.",
                "Bottle rack for easy storage.",
                "It has a super cool button.",
                "Display when the door is open.",
              ],
            },
            {
              name: "Tesla RC3200FHX Combined Refrigerator",
              id: "RC3200FHX",
              images: RC3200FHXimgArr,
              price: 415,
              brand: "tesla",
              spec: {
                color: "silver",
                width: "60.5 cm",
                height: "185.8 cm",
                depth: "61.5 cm",
                volume: "286 l",
                electricityConsumption: "0.745 kWh/24h, 273 kWh/per year",
              },
              desc: [
                "Combined refrigerator with No Frost cooling technology.",
                "Freezer in the lower part with three transparent drawers.",
                "Electronic temperature control enabled.",
                "Usable volume is 286 l.",
              ],
            },
            {
              name: "LG Side by side refrigerator GSJ760WBXV, Total No Frost",
              id: "GSJ760WBXV",
              images: GSJ760WBXVimgArr,
              price: 1499,
              brand: "lg",
              spec: {
                color: "black",
                width: "91.2 cm",
                height: "179 cm",
                depth: "73.8 cm",
                volume: "601 l",
                electricityConsumption: "419 kWh/per year",
              },
              desc: [
                "Energy class: F.",
                "Refrigerator volume: 405 l.",
                "Dimensions: 91.2 cm x 179 cm x 73.8 cm.",
                "Freezer capacity: 196 l.",
                "Multiple Airflow.",
              ],
            },
          ],
        },
        {
          name: "Ranges,Cooktops & Ovens",
          img: rangesCooktopsAndOvens,
          param: "ranges-cooktops-and-ovens",
          products: [
            {
              name: "Series 2 free-standing electric cooker HKA090150",
              id: "HKA090150",
              images: HKA090150imgArr,
              price: 599,
              brand: "bosch",
              spec: {
                color: "silver",
                width: 60,
                height: 85,
                dedpth: 60,
                hobType: "glass-ceramic",
                ovenVolume: "66 l",
                electricityConsumption: "0.98 kwh",
              },
              desc: [
                "Energy class: A.",
                "Electric stove with glass-ceramic plate.",
                "Oven volume: 66 l.",
                "Fixed wire guides on 4 levels.",
                "Halogen lighting.",
              ],
            },
            {
              name: "Tesla electric cooker CV5400SW",
              id: "CV5400SW",
              images: CV5400SWimgArr,
              price: 299,
              brand: "tesla",
              spec: {
                color: "white",
                width: 50,
                height: 85,
                dedpth: 60,
                hobType: "glass-ceramic",
                ovenVolume: "43 l",
                electricityConsumption: "0.69 kWh",
              },
              desc: [
                "Electric stove with glass-ceramic plate.",
                "The volume of the oven is 43 l.",
                "Effective steam cleaning.",
                "Temperature range from 40 ???C to 240 ???C.",
                "Top and bottom heater with fan.",
              ],
            },
            {
              name: "Candy electric cooker CEE548SEEW",
              id: "CEE548SEEW",
              images: CEE548SEEWimgArr,
              price: 229,
              brand: "candy",
              spec: {
                color: "white",
                width: 50,
                height: 86,
                dedpth: 51,
                hobType: "hot plate",
                ovenVolume: "48 l",
              },
              desc: [
                "Free-standing stove, 50 cm wide.",
                "Conventional oven with a volume of 48 l.",
                "Four hotplates with 6 power levels.",
                "Mechanical control.",
                "A energy class.",
              ],
            },
            {
              name: "Candy electric cooker CVE6607FEES",
              id: "CVE6607FEES",
              images: CVE6607FEESimgArr,
              price: 419,
              brand: "candy",
              spec: {
                color: "silver",
                width: 60,
                height: 86,
                dedpth: 61,
                hobType: "glass-ceramic",
                ovenVolume: "60 l",
              },
              desc: [
                "Freestanding stove with a width of 60 cm.",
                "The volume of the multifunctional oven is 60 l.",
                "Digital way of management.",
                "It has a grill and a fan.",
                "Contains 1 tray and 2 grids.",
              ],
            },
          ],
        },
        {
          name: "Microwaves",
          img: microwaves,
          param: "microwaves",
          products: [
            {
              name: "Samsung Built-in microwave oven MG23A7013CAL",
              id: "MG23A7013CAL",
              images: MG23A7013CALimgArr,
              price: 319,
              brand: "samsung",
              spec: {
                color: "black",
                width: "48.9 cm",
                height: "27.5 cm",
                depth: "36.2cm",
                power: "800 W",
                volume: "23 l",
              },
              desc: [
                "Built-in microwave oven with a grill heater with a volume of 23 l.",
                "Grill Fry function provides baked and crispy food as if from the oven.",
                "Elegant design in black color perfectly matches the kitchen interior.",
                "The LED screen enables simple management.",
              ],
            },
            {
              name: "LG Microwave Oven MH6535GIH",
              id: "MH6535GIH",
              images: MH6535GIHimgArr,
              price: 149,
              brand: "lg",
              spec: {
                color: "white",
                width: "47.6 cm",
                height: "27.2 cm",
                depth: "38.8 cm",
                power: "1150 W",
                volume: "25 l",
              },
              desc: [
                "Volume: 25 l.",
                "Power (oven/grill): 1150 W / 900 W.",
                "Dimensions: 476 mm x 272 mm x 388 mm.",
                "Heater type: Quartz.",
                "Bogie diameter: 292 mm.",
              ],
            },
            {
              name: "Series 2 free-standing Microwave Oven-FEL023MS2",
              id: "FEL023MS2",
              images: FEL023MS2imgArr,
              price: 215,
              brand: "bosch",
              spec: {
                color: "black",
                width: "44.2 cm",
                height: "34.5 cm",
                depth: "26 cm",
                power: "800 W",
                volume: "20 l",
              },
              desc: [
                "Exceptional microwave oven with LED display and rotary control for easy use.",
                "Equipped with 8 preset programs.",
                "Perfect food preparation results with the microwave and grill functions.",
                "Adjustable power on 5 levels up to 800 W.",
              ],
            },
          ],
        },
      ],
    },
    {
      category: "TV & Home Teather",
      param: "tv-and-home-teather",
      subcategories: [
        {
          name: "TVs",
          img: tv,
          param: "tv",
          products: [
            {
              name: "Samsung Smart TV UE43AU7172UXXH",
              id: "UE43AU7172UXXH",
              images: UE43AU7172UXXHimgArr,
              price: 399,
              brand: "samsung",
              spec: {
                color: "grey",
                HDMI: 3,
                LAN: true,
                screenDiagonal: '43"',
                screenTechnology: "LED",
                screenResolution: "3840 x 2160 px 4K Ultra HD",
              },
              desc: [
                "Experience realistic and detailed images with a resolution of 3840 x 2160 px.",
                "HDR increases the range of light levels.",
                "Great Tap View feature for mirroring content from mobile to TV.",
                "It has an automatic game mode.",
              ],
            },
            {
              name: 'Samsung "The Serif" Smart TV QE55LS01TAUXXH',
              id: "QE55LS01TAUXXH",
              images: QE55LS01TAUXXHimgArr,
              price: 849,
              brand: "samsung",
              spec: {
                color: "white",
                HDMI: 4,
                screenDiagonal: '55"',
                screenTechnology: "QLED",
                screenResolution: "3840 x 2160 px 4K Ultra HD",
              },
              desc: [
                "A smart TV with a unique design with a detachable floor stand.",
                "Active Voice Amplifier automatically filters the voices coming from the screen.",
                "Quantum Dot technology provides 100% three-dimensional color gamut.",
                'Large diagonal 55".',
                "QLED screen.",
              ],
            },
            {
              name: "LG Smart NanoCell TV NANO753PA",
              id: "NANO753PA",
              images: NANO753PAimgArr,
              price: 635,
              brand: "lg",
              spec: {
                color: "grey",
                HDMI: 3,
                LAN: 1,
                screenDiagonal: '50"',
                screenTechnology: "NanoCell",
                screenResolution: "3840 x 2160 px 4K Ultra HD",
              },
              desc: [
                'Smart TV for a cinematic experience with a 50" screen with NanoCell technology.',
                "A realistic and detailed image is offered by the 4K resolution.",
                "Vivid colors with Active HDR technology.",
                "Enabled simple wireless connection to the computer.",
              ],
            },
            {
              name: "LG Smart TV UP75003LFAEU",
              id: "UP75003LFAEU",
              images: UP75003LFAEUimgArr,
              price: 549,
              brand: "lg",
              spec: {
                color: "black",
                HDMI: 2,
                LAN: 1,
                screenDiagonal: '55"',
                screenTechnology: "LCD",
                screenResolution: "3840 x 2160 px 4K Ultra HD",
              },
              desc: [
                'Smart television with a 55" LCD screen and superb 4K Ultra HD resolution.',
                "Active HDR offers a vivid color display with plenty of detail.",
                "Simple voice search and quick access to your favorite apps.",
                "Sound optimization according to content genre.",
              ],
            },
            {
              name: "Sony OLED Smart TV KD55A8BAEP ",
              id: "KD55A8BAEP",
              images: KD55A8BAEPimgArr,
              price: 1499,
              brand: "sony",
              spec: {
                color: "black",
                HDMI: 4,
                LAN: true,
                screenDiagonal: '55"',
                screenTechnology: "OLED",
                screenResolution: "3840 x 2160 px 4K Ultra HD",
              },
              desc: [
                "Screen resolution: 4K HDR, 3840 x 2160 px.",
                "Panel type: OLED Android TV.",
                "Image processor: 4K X1 Ultimate.",
                'Screen diagonal: 55", 139 cm.',
              ],
            },
            {
              name: "Sony Smart TV XR50X90JAEP",
              id: "XR50X90JAEP",
              images: XR50X90JAEPimgArr,
              price: 1099,
              brand: "sony",
              spec: {
                color: "black",
                HDMI: 4,
                LAN: true,
                screenDiagonal: '50"',
                screenTechnology: "LCD",
                screenResolution: "3840 x 2160 px 4K Ultra HD",
              },
              desc: [
                "Screen resolution: 4K HDR, 3840 x 2160 px",
                "Panel type: LCD, Full Array LED.",
                "Google TV",
                "Image processor: Cognitive Processor XR.",
                'Screen diagonal: 50", 126 cm.',
              ],
            },
          ],
        },
        { name: "Audio", img: audio, param: "audio", products: [] },
        {
          name: "Home Teather",
          img: homeTeather,
          param: "home-teather",
          products: [],
        },
      ],
    },
    {
      category: "Computers & Tablets",
      param: "computers-and-tablets",
      subcategories: [
        { name: "Desktops", img: desktops, param: "desktops", products: [] },
        { name: "Laptops", img: laptops, param: "laptops", products: [] },
        { name: "Tablets", img: tablets, params: "tablets", products: [] },
      ],
    },
    {
      category: "Cameras & Drones",
      param: "cameras-and-drones",
      subcategories: [
        { name: "Cameras", img: cameras, param: "cameras", products: [] },
        { name: "Drones", img: drones, param: "drones", products: [] },
      ],
    },
    {
      category: "Cellphones & Accessories",
      param: "cellphones-and-accessories",
      subcategories: [
        {
          name: "Cell Phones",
          img: cellPhones,
          param: "cell-phones",
          products: [],
        },
        {
          name: "Cell Phone Equipment",
          img: cellPhoneEquipment,
          param: "cell-phone-equipment",
          products: [],
        },
      ],
    },
    {
      category: "Gaming & Consoles",
      param: "gaming-and-consoles",
      subcategories: [
        {
          name: "Game Consoles",
          img: gameConsoles,
          param: "game-consoles",
          products: [],
        },
        {
          name: "Video Games",
          img: videoGames,
          param: "video-games",
          products: [],
        },
      ],
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    filterProducts(state, action) {},
  },
  
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
