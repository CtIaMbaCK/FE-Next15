"use client";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Card,
  Container,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  CardMedia,
  CardContent,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Chat from "../components/main/Chat";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/about");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const major = [
    {
      title: "THIẾT KẾ",
      icon: "https://ext.same-assets.com/3671364340/1546733673.png",
    },
    {
      title: "LUẬT - KINH DOANH & QUẢN LÝ",
      icon: "https://ext.same-assets.com/3671364340/240114473.png",
    },
    {
      title: "TRUYỀN THÔNG",
      icon: "https://ext.same-assets.com/3671364340/4240619985.png",
    },
    {
      title: "XÃ HỘI NHÂN VĂN - NGÔN NGỮ",
      icon: "https://ext.same-assets.com/3671364340/273649144.png",
    },
    {
      title: "CÔNG NGHỆ - KỸ THUẬT",
      icon: "https://ext.same-assets.com/3671364340/2940056520.png",
    },
    {
      title: "KIẾN TRÚC",
      icon: "https://ext.same-assets.com/3671364340/3458008392.png",
    },
    {
      title: "KHOA HỌC SỨC KHỎE",
      icon: "https://ext.same-assets.com/3671364340/709881049.png",
    },
    {
      title: "NGHỆ THUẬT",
      icon: "https://ext.same-assets.com/3671364340/352056085.png",
    },
    {
      title: "DU LỊCH",
      icon: "https://ext.same-assets.com/3671364340/2165468724.png",
    },
  ];

  const newsData = [
    {
      title:
        "Trường Đại học Văn Lang nhận hồ sơ thi đánh giá năng lực V-SAT năm 2025",
      date: "2025-04-21",
      source: "Phòng Tuyển sinh và Truyền thông",
      image: "https://ext.same-assets.com/3671364340/849522504.jpeg",
    },
    {
      title:
        "Thông báo: Trường Đại học Văn Lang nhận hồ sơ xét duyệt học bổng tài năng năm 2025",
      date: "2025-04-21",
      source: "Phòng Tuyển sinh và Truyền thông",
      image: "https://ext.same-assets.com/3671364340/849522504.jpeg",
    },
    {
      title:
        "Chính thức: Thông tin tuyển sinh 2025 của Trường Đại học Văn Lang",
      date: "2025-04-21",
      source: "Phòng Tuyển sinh và Truyền thông",
      image: "https://ext.same-assets.com/3671364340/849522504.jpeg",
    },
  ]; 

  //  
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container sx={{ mt: 10, zIndex: 1 }} className="">
        <Box
          className="lg:rounded-br-[70px] lg:rounded-tl-[70px]"
          position={"relative"}
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 8 : 4,
            alignItems: "flex-start",
            backgroundColor: "#D9D9D9",
            padding: isMobile ? 2 : 4,
            paddingY: isMobile ? 4 : 10,
          }}
        >
          <Card
            sx={{
              position: "relative",
              paddingTop: isMobile ? "50.25%" : "30.25%",
              width: isMobile ? "100%" : "60%",
              flexShrink: 0,
              backgroundColor: "black",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/DJhS895ambk"
              title="VAN LANG UNIVERSITY: WHERE IMPACT MATTERS"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            ></iframe>
          </Card>

          <Typography
            fontSize={isMobile ? "0.75rem" : "1.5rem"}
            position="absolute"
            sx={{
              top: isMobile ? 160 : 40,
              right: isMobile ? -10 : 0,
              backgroundColor: "#1F2251",
              padding: 2,
              color: "#F0DFA9",
              width: isMobile ? "70%" : "50%",
              fontWeight: "bold"
            }}
          >
            Văn Lang – nơi khơi nguồn tư duy sáng tạo, tạo đà cho những cải tiến
            đột phá.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              mt: isMobile ? 0 : 16,
            }}
          >
            <Typography>
              Ngoài việc trang bị kiến thức và kỹ năng chuyên môn vững chắc, Văn
              Lang còn chú trọng nuôi dưỡng tư duy nghiên cứu cho người học,
              giúp họ nhạy bén với ý tưởng mới và sẵn sàng tạo ra những đột phá
              sáng tạo.
            </Typography>
            <Button
              variant="text"
              sx={{
                mt: 2,
                backgroundColor: "transparent",
              }}
              onClick={handleClick}
            >

              <Box
                className=" flex justify-center items-center bg-[#B02E35] p-4 w-full text-white hover:scale-105 transition-all ease-in-out duration-300 rounded-lg animate-slideInLeft "
              >
                <Typography>Tìm hiểu thêm về chúng tôi</Typography>
                <ArrowForwardIosIcon sx={{
                  fontSize: "1rem",
                }} />
              </Box>
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 0 : 4,
            alignItems: "center",
            backgroundColor: "",
          }}
        >
          <Box className="lg:w-3/4 h-100  flex flex-col items-center justify-center">
            <Box className="flex items-center justify-around w-full lg:px-4 ">
              <Image
                src={"/100.png"}
                alt="daotaotrongnuoc"
                width={1000}
                height={1000}
                className="w-40"
              ></Image>
              <Image
                src={"/30.png"}
                alt="daotaolienhe"
                width={1000}
                height={1000}
                className="w-50"
              ></Image>
            </Box>
            <Box className="flex items-center justify-around w-full px-4 mt-4">
              <Image
                src={"/09.png"}
                alt="khoinganh"
                width={1000}
                height={1000}
                className="w-40"
              ></Image>
            </Box>
          </Box>
          <Image
            src="/phan2.png"
            alt="decor2"
            width={2000}
            height={2000}
            className=" w-120 hover:scale-110 transition-all ease-in-out transition-300 icon "
          ></Image>
        </Box>

        <Grid container spacing={3}>
          {major.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                  },
                  borderRadius: 2,
                  bgcolor: "background.paper",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.icon}
                  alt={item.title}
                  sx={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    p: 2,
                  }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center", p: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "text.primary" }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          component="section"
          sx={{ mt: 10, mb: 10 }}
        >
          <Box maxWidth="lg" mx="auto">
            {/* Header */}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              py={3}
              px={2}
            >
              <Typography variant="h6" fontWeight="bold" color="text.primary">
                Tin tức nổi bật
              </Typography>
              <Box display="flex" alignItems="center" sx={{ gap: 1 }}>
                <Button
                  variant="contained"
                  href="https://tuyensinh.vlu.edu.vn/tin-tuc"
                  sx={{
                    backgroundColor: "#1f224d",
                    borderRadius: "16px",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 3,
                    "&:hover": {
                      backgroundColor: "#2a2e6a",
                    },
                  }}
                >
                  Xem toàn bộ tin tức
                </Button>
                <ArrowForwardIcon sx={{ color: "#d91f36", ml: 1 }} />
              </Box>
            </Box>

            {/* news */}
            <Grid container spacing={3} px={2}>
              {newsData.map((news, index) => (
                <Grid item xs={12} md={6} lg={4} key={index}>
                  <Link href={"https://tuyensinh.vlu.edu.vn/nganh-tuyen-sinh"}>
                    <Card
                      sx={{
                        height: "100%",
                        transition: "0.3s",
                        "&:hover": {
                          transform: "scale(1.03)",
                          boxShadow: 6,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={news.image}
                        height="180"
                        alt="News image"
                      />
                      <CardContent>
                        <Typography
                          variant="subtitle1"
                          fontWeight="bold"
                          gutterBottom
                        >
                          {news.title}
                        </Typography>
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          fontSize="0.875rem"
                        >
                          <Typography variant="body2" color="text.secondary">
                            {news.source}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {news.date}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}

            </Grid>
          </Box>
        </Box>
      </Container>
      <Chat />
    </motion.div>
  );
}
