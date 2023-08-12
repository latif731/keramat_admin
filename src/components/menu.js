export const menu = [
  {
    icon: "",
    title: "DASHBOARD",
    path: "/dashboard",
  },
  {
    icon: "",
    title: "DATA BARANG ONLINE",
    submenu: [
      {
        title: "Barang",
        submenu: [
          {
            title: "Harga Barang",
            path: "/hargabarang",
          },
          {
            title: "Barang Masuk",
            path: "/barangmasuk",
          },
          {
            title: "Profit Per hari",
            path: "/profitperhari",
          },
        ],
      },
      {
        title: "Pengiriman",
        submenu: [
          {
            title: "Vip Terkirim",
            path: "/vipterkirim",
          },
          {
            title: "Mau Lagi Terkirim",
            path: "/maulagiterkirim",
          },
        ],
      },
      {
        title: "Return",
        submenu: [
          {
            title: "Return Sumatera",
            path: "/returnsumatera",
          },
          {
            title: "Return Jawa Bali",
            path: "/returnjawabali",
          },
          {
            title: "Barang Return",
            path: "/barangreturn",
          },
          {
            title: "Barang Return Yang Gak Bisa Dikirim",
            path: "/returntidakdikirim",
          },
          {
            title: "Barang Return Terkirim",
            path: "/returnterkirim",
          },
        ],
      },
    ],
  },
  {
    icon: "",
    title: "KEUANGAN V2",
    submenu: [
      {
        title: "Pengeluaran",
        submenu: [
          {
            title: "Pengeluaran Per Bulan",
            path: "/pengeluaranperbulan",
          },
          {
            title: "Hitungan Modal Per Barang",
            path: "/hitunganmodalperbarang",
          },
          {
            title: "Akomodasi Dan Perlengkapan",
            path: "/AkomodasiDanPerlengkapan",
          },
          {
            title: "Pengeluaran Modal Beli Barang",
            path: "/pengeluaranmodalbelibarang",
          },
        ],
      },
      {
        title: "Profit",
        submenu: [
          {
            title: "Profit Barang Kotor Perhari",
            path: "/products",
          },
          {
            title: "Payment Mingguan",
            path: "/",
          },
          {
            title: "Profit Bulanan",
            path: "/",
          },
        ],
      },
    ],
  },
];
