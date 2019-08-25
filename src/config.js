const apiUrl = process.env.REACT_APP_API_URL;

const products =
  process.env.NODE_ENV === "test"
    ? [
        {
          id: 1,
          price: "$87.68",
          product_name: "Amitriptyline Hydrochloride",
          description: "synergize efficient metrics",
          product_image: "http://dummyimage.com/307x328.bmp/ff4444/ffffff"
        },
        {
          id: 2,
          price: "$58.53",
          product_name: "Zicam",
          description: "repurpose world-class metrics",
          product_image: "http://dummyimage.com/345x342.jpg/dddddd/000000"
        },
        {
          id: 3,
          price: "$12.82",
          product_name: "Home Care Fluoride",
          description: "reinvent end-to-end relationships",
          product_image: "http://dummyimage.com/318x336.png/5fa2dd/ffffff"
        },
        {
          id: 4,
          price: "$55.33",
          product_name: "Amlodipine Besylate",
          description: "optimize visionary channels",
          product_image: "http://dummyimage.com/340x344.png/dddddd/000000"
        },
        {
          id: 5,
          price: "$30.22",
          product_name: "Cyclobenzaprine Hydrochloride",
          description: "reinvent back-end deliverables",
          product_image: "http://dummyimage.com/324x341.bmp/dddddd/000000"
        },
        {
          id: 6,
          price: "$72.06",
          product_name: "Buspirone HCl",
          description: "exploit dot-com communities",
          product_image: "http://dummyimage.com/303x315.png/cc0000/ffffff"
        },
        {
          id: 7,
          price: "$62.89",
          product_name: "BSS",
          description: "mesh compelling paradigms",
          product_image: "http://dummyimage.com/319x343.bmp/ff4444/ffffff"
        },
        {
          id: 8,
          price: "$39.19",
          product_name: "NuvaRing",
          description: "leverage distributed vortals",
          product_image: "http://dummyimage.com/302x307.jpg/dddddd/000000"
        },
        {
          id: 9,
          price: "$21.13",
          product_name: "TERCONAZOLE",
          description: "morph compelling infomediaries",
          product_image: "http://dummyimage.com/345x349.jpg/cc0000/ffffff"
        }
      ]
    : [];

const pagination = {
  itemsPerPage: [4, 8, 10, 20, 40],
  currentLimit: 4,
  currentOffset: 0,
  marginPagesDisplayed: 2,
  pageCount: 0,
  total: 0,
  hasNext: false,
  hasPrevious: false,
  products,
  pageRangeDisplayed: 5
};

const STATUS = {
  PRISTINE: "pristine",
  IDLE: "idle",
  START: "start",
  RUNNING: "running",
  READY: "ready",
  SUCCESS: "success",
  ERROR: "error"
};

export { apiUrl, pagination, STATUS };
