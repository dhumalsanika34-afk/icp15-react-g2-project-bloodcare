const hospitalData = [

  {
    id: 1,
    name: "Government Medical College Hospital",
    city: "Nagpur",
    address: "Hanuman Nagar, Nagpur",
    phone: "07122700000",
    rating: 4.5,
    emergency: true,
    image: "https://gmcnagpur.org/assets/images/Banner02.jpg",
    bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
  },

  {
    id: 2,
    name: "Wockhardt Hospitals",
    city: "Nagpur",
    address: "North Ambazari Road, Nagpur",
    phone: "07126624444",
    rating: 4.6,
    emergency: true,
    image: "https://imgs.search.brave.com/YPW9UBbrAhCF4pY4-MYXY7TXl8JL0G8SHgMhdA6pkKs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jYW5j/ZXJyb3VuZHMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI2/LzAyL1dvY2toYXJk/dC1TdXBlci1TcGVj/aWFsaXR5LUhvc3Bp/dGFsLU5hZ3B1ci5w/bmc",
    bloodGroups: ["A+", "B+", "O+", "AB+"]
  },

  {
    id: 3,
    name: "Alexis Multispeciality Hospital",
    city: "Nagpur",
    address: "Mankapur, Nagpur",
    phone: "07126789999",
    rating: 4.4,
    emergency: true,
    image: "https://imgs.search.brave.com/PRH_baHD24pOKQrOEXglm2Jt1jGiMh3v_7TMvoomWpI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRz/dXJnZWluZGlhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wMi9BbGV4aXMt/TXVsdGlzcGVjaWFs/aXR5LUhvc3BpdGFs/LU5hZ3B1ci1NYWhh/cmFzaHRyYS1JbmRp/YS53ZWJw",
    bloodGroups: ["A+", "B+", "O+", "O-"]
  },

  {
    id: 4,
    name: "Orange City Hospital",
    city: "Nagpur",
    address: "Manish Nagar, Nagpur",
    phone: "07122234567",
    rating: 4.2,
    emergency: false,
    image: "https://imgs.search.brave.com/71pmvvznn4u9aN3puJsn0Jz-7WeBRGcGrxp3CYDLv58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/aW5kaWFubWVkZ3Vy/dS5jb20vaW1hZ2Vz/L09yYW5nZS1DaXR5/LUhvc3BpdGFsLUlu/ZGlhLmpwZw",
    bloodGroups: ["A+", "B+", "AB+", "O+"]
  },


  {
    id: 5,
    name: "KEM Hospital",
    city: "Mumbai",
    address: "Parel, Mumbai",
    phone: "02224107000",
    rating: 4.5,
    emergency: true,
    image: "https://imgs.search.brave.com/IVbI1sQTwxzZGFlqjbXJ26OcQ2ex6EzsAucTK62eSTY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvbXVtYmFpLzM2/LzAyMnA4MTA4MzYv/Y2F0YWxvZ3VlL2tl/bS1ob3NwaXRhbC1w/YXJlbC1tdW1iYWkt/cHVibGljLWhvc3Bp/dGFscy0wczVlZS5q/cGc_aW13aWR0aD0y/NTA",
    bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
  },

  {
    id: 6,
    name: "Seth GS Medical College and KEM Hospital",
    city: "Mumbai",
    address: "Parel, Mumbai",
    phone: "02224136051",
    rating: 4.6,
    emergency: true,
    image: "https://imgs.search.brave.com/IWT5XdXxwnS_8fcLgSBHel64RFCzxCHmYgRLWAZZP0I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tYmJz/YWR2aXNvci5pbi9t/YWhhcmFzaHRyYS9p/bWFnZXMvc2V0aC1n/cy1tZWRpY2FsLWNv/bGxlZ2UtYW5kLWtl/bS1ob3NwaXRhbC5q/cGc",
    bloodGroups: ["A+", "B+", "B-", "O+", "O-", "AB+"]
  },

  {
    id: 7,
    name: "Lilavati Hospital and Research Centre",
    city: "Mumbai",
    address: "Bandra West, Mumbai",
    phone: "02226751000",
    rating: 4.7,
    emergency: true,
    image: "https://imgs.search.brave.com/92ggMNy63oEyNAbWsG5-V0s92vlCbO3nqz3M2Ecr1xc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jaGll/ZnRvdXJpc20uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzExL0xpbGF2YXRp/LUhvc3BpdGFsLVJl/c2VhcmNoLUNlbnRy/ZS1NdW1iYWkuanBn",
    bloodGroups: ["A+", "A-", "B+", "O+", "O-", "AB+"]
  },

  {
    id: 8,
    name: "Kokilaben Dhirubhai Ambani Hospital",
    city: "Mumbai",
    address: "Andheri West, Mumbai",
    phone: "02242696969",
    rating: 4.8,
    emergency: true,
    image: "https://imgs.search.brave.com/A7wOUJH9gIGXhP4Ybcm8XSOIScASU4KTYUPQYfNV4MA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jaGll/ZnRvdXJpc20uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzAxL0tva2lsYWJl/bi1EaGlydWJoYWkt/QW1iYW5pLUhvc3Bp/dGFsLTEuanBn",
    bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
  },

  {
    id: 9,
    name: "Nanavati Max Super Speciality Hospital",
    city: "Mumbai",
    address: "Vile Parle West, Mumbai",
    phone: "02226267500",
    rating: 4.6,
    emergency: true,
    image: "https://imgs.search.brave.com/UPjQ5QW5dFwPJTk6I4UN3ncgDjh6G37UaSOsndBM5gc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/Y2FsZGlhbG9ndWVz/LmluL2gtdXBsb2Fk/LzIwMjMvMDYvMjYv/MjEyNzcyLW5hbmF2/YXRpLWhvc3BpdGFs/LndlYnA",
    bloodGroups: ["A+", "B+", "O+", "AB+"]
  },

  {
    id: 10,
    name: "Hinduja Hospital",
    city: "Mumbai",
    address: "Mahim, Mumbai",
    phone: "02224451515",
    rating: 4.5,
    emergency: true,
    image: "https://imgs.search.brave.com/AfQtfHQYtT3naWV-tFegzttkiaA972dG16BDA8Cq3KE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL3YyL2Nv/bXAvbXVtYmFpL2Q3/LzAyMnB4eDIyLnh4/MjIuMjMxMjA3MTYw/NjU3LnE3ZDcvY2F0/YWxvZ3VlL3AtZC1o/aW5kdWphLWhvc3Bp/dGFsLWFuZC1tZWRp/Y2FsLXJlc2VhcmNo/LWNlbnRyZS1hbWJ1/bGFuY2Utc2Vydmlj/ZXMtbWFoaW0tbXVt/YmFpLTI0LWhvdXJz/LWFtYnVsYW5jZS1z/ZXJ2aWNlcy13NTVy/b3RydmdxLTI1MC5q/cGc_dz0zODQwJnE9/NzU",
    bloodGroups: ["A+", "A-", "B+", "O+", "O-", "AB+"]
  },



  {
    id: 11,
    name: "Sassoon General Hospital",
    city: "Pune",
    address: "Near Pune Railway Station, Pune",
    phone: "02026128000",
    rating: 4.4,
    emergency: true,
    image: "https://imgs.search.brave.com/VAMJZv1BaY2IM1gXS9PmrduG0GHFQ85WWQ4DRBYXzIo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mbGVl/dHRvZ2V0aGVyLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Ni8wNS9TYXNzb29u/LUhvc3BpdGFsLVB1/bmUuanBn",
    bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
  },

  {
    id: 12,
    name: "Ruby Hall Clinic",
    city: "Pune",
    address: "Sassoon Road, Pune",
    phone: "02066455100",
    rating: 4.6,
    emergency: true,
    image: "https://imgs.search.brave.com/6JY3PWphNEKtxD9TlIwN0BZhzAUasPkbz9fUu8akOAA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/cHVuZS9uNi8wMjBw/eHgyMC54eDIwLjA5/MTAwNTE0MTczNi5k/NG42L2NhdGFsb2d1/ZS9ydWJ5LWhhbGwt/Y2xpbmljLXdhbm93/cmllLXB1bmUtZGVy/bWF0b2xvZ2lzdHMt/cHptaXktMjUwLmpw/Zz93PTY0MCZxPTc1",
    bloodGroups: ["A+", "B+", "B-", "O+", "O-", "AB+"]
  },

  {
    id: 13,
    name: "Jehangir Hospital",
    city: "Pune",
    address: "Sassoon Road, Pune",
    phone: "02066819999",
    rating: 4.5,
    emergency: true,
    image: "https://imgs.search.brave.com/O_a52NIDmgin2ezsNUvB3_blx-xIgR3JKlSPGCKaLco/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMxLWZhYnJpYy5w/cmFjdG8uY29tL3By/YWN0aWNlcy8xMTM2/ODY3L2plaGFuZ2ly/LWhvc3BpdGFsLXB1/bmUtNWFiMDg1MjBk/N2M0Ni5qcGc",
    bloodGroups: ["A+", "A-", "B+", "O+", "AB+"]
  },

  {
    id: 14,
    name: "Deenanath Mangeshkar Hospital",
    city: "Pune",
    address: "Erandwane, Pune",
    phone: "02040151000",
    rating: 4.7,
    emergency: true,
    image: "https://imgs.search.brave.com/W4PjXjxUSu2B1XKrgbYBrhXIhZJ02PF6x2Zm09nbdAo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMxLWZhYnJpYy5w/cmFjdG8uY29tL3By/YWN0aWNlcy82NDE5/MjEvZGVlbmFuYXRo/LW1hbmdlc2hrYXIt/aG9zcGl0YWwtcHVu/ZS02NjU0NDQyYzRm/MzE3LnBuZw",
    bloodGroups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+"]
  },

  {
    id: 15,
    name: "Bharati Hospital",
    city: "Pune",
    address: "Dhankawadi, Pune",
    phone: "02040555555",
    rating: 4.4,
    emergency: true,
    image: "https://imgs.search.brave.com/rY_mICh2Ujuwc-3mtTEAg2cESLwFRuAVGHcDobaBl-0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iaGFy/YXRpaG9zcGl0YWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzEyL0Jsb2ct/My1JbWFnZS5qcGVn",
    bloodGroups: ["A+", "B+", "O+", "AB+", "AB-"]
  },

  {
    id: 16,
    name: "Sahyadri Super Speciality Hospital",
    city: "Pune",
    address: "Deccan Gymkhana, Pune",
    phone: "02067213000",
    rating: 4.6,
    emergency: true,
    image: "https://imgs.search.brave.com/N2BMcD73P_YTgeFgypFSeq47tdPdORA3z761Dug5D_g/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kb2N0/b3JsaXN0aW5naW5n/ZXN0aW9ucHIuYmxv/Yi5jb3JlLndpbmRv/d3MubmV0L2RvY3Rv/cnByb2ZpbGVwaWMv/MTY3MDUwMDc0NTY3/OF9Ib3NwaXRhbFBy/b2ZpbGVJbWFnZV9D/YXB0dXJlLlBORw",
    bloodGroups: ["A+", "A-", "B+", "O+", "O-", "AB+"]
  }
];

export default hospitalData;