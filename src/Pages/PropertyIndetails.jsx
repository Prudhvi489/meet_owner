import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import HeartIcon from "../Components/icons/HeartIcon";
import CarouselShareIcon from "../Components/icons/CarouselShareIcon";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { images } from "../Config/Imageexports";
const PropertyIndetails = () => {
  return (
    <Grid component={"section"} sx={{ backgroundColor: "#F5F5F5" }}>
      <Grid
        container
        item
        p={3}
        justifyContent={"center"}
        sx={{
          fontWeight: 700,
          color: "#1D3A76",
          fontSize: "3rem",
          letterSpacing: "5px",
        }}
      >
        LAKESCAPE PROPERTY DETAILS
      </Grid>
      <Grid container p={"2rem 1rem"} sx={{ backgroundColor: "#fff" }}>
        <Grid container item gap={2} direction={"column"} md={9} pr={6}>
          <Grid container gap={2} direction={"column"}>
            <Typography
              sx={{ color: "#1D3A76", fontSize: "2rem", fontWeight: 600 }}
            >
              Property Description
            </Typography>
            <Typography
              sx={{ color: "#6E6E6E", fontSize: "1.1rem", fontWeight: 500 }}
            >
              Lakescape by Candeur offers dream homes with unrivalled lake views
              in 2BHK to 3.5BHK options. Experience abundant natural light, a
              spacious clubhouse, and a private outdoor working area. Elevate
              your lifestyle with this perfect blend of comfort and scenic
              beauty. Read More...
            </Typography>
          </Grid>
          <Grid
            container
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Grid item width={"fit-content"} container direction={"column"}>
              <Typography
                sx={{ fontSize: "2.1rem", color: "#1D3A76", fontWeight: 700 }}
              >
                LAKESCAPE
              </Typography>
              <Typography
                sx={{ fontSize: "0.7rem", color: "#878787", fontWeight: 400 }}
              >
                CONSTRUCTION PVT LTD...
              </Typography>
              <Typography
                sx={{ fontSize: "1.1rem", color: "#1D3A76", fontWeight: 700 }}
              >
                Kondapur, Hyderabad..
              </Typography>
            </Grid>
            <Grid
              item
              width={"fit-content"}
              container
              direction={"column"}
              alignItems={"flex-end"}
            >
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  color: "#492828",
                  fontWeight: 700,
                  "& span": { fontSize: "1.1rem", color: "#000000" },
                }}
              >
                ₹ 2 Cr - ₹ 4 Cr - <span>₹ 10.k/sq.ft</span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.1rem",
                  color: "#1D3A76",
                  fontWeight: 400,
                  "& span": { fontSize: "1.1rem", color: "#000000" },
                }}
              >
                EMI starts at <span>₹</span> 60.24 K
              </Typography>
              <Typography
                sx={{ fontSize: "0.6rem", color: "#878787", fontWeight: 400 }}
              >
                All Inclusive Price
              </Typography>
            </Grid>
          </Grid>
          <Grid container gap={2} direction={"column"}>
            <Typography
              sx={{ color: "#1D3A76", fontSize: "2rem", fontWeight: 600 }}
            >
              LAKESCAPE Amenities
            </Typography>
            <Grid
              container
              sx={{
                backgroundColor: "#F3F3F3",
                padding: "1.5rem",
                borderRadius: "1rem",
              }}
            >
              <Grid
                container
                justifyContent={"flex-end"}
                gap={2}
                alignItems={"center"}
                py={"1rem"}
              >
                <HeartIcon />
                <CarouselShareIcon />
                <span
                  style={{
                    backgroundColor: "#079E9E",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 1rem",
                    display: "flex",
                  }}
                >
                  Ask for Details
                </span>
              </Grid>
              <Grid container columnSpacing={2} rowSpacing={4} pb={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <Grid item md={3}>
                      <Grid container gap={2} alignItems={"center"}>
                        <Grid item>
                          <svg
                            width="39"
                            height="39"
                            viewBox="0 0 39 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1"
                              y="1"
                              width="37"
                              height="37"
                              rx="9"
                              stroke="#492828"
                              stroke-width="2"
                            />
                            <path
                              d="M18.8284 10.9135C18.8284 11.5956 18.5434 12.2497 18.0362 12.732C17.5289 13.2143 16.841 13.4852 16.1236 13.4852C15.4062 13.4852 14.7183 13.2143 14.211 12.732C13.7038 12.2497 13.4188 11.5956 13.4188 10.9135C13.4188 10.2315 13.7038 9.57733 14.211 9.09504C14.7183 8.61275 15.4062 8.3418 16.1236 8.3418C16.841 8.3418 17.5289 8.61275 18.0362 9.09504C18.5434 9.57733 18.8284 10.2315 18.8284 10.9135ZM24.0216 20.6518L20.4152 17.2228C20.3276 17.1226 20.217 17.0428 20.0921 16.9893C19.9671 16.9358 19.8309 16.9101 19.6939 16.9142H11.1648C10.837 16.9071 10.5179 17.0151 10.2684 17.2175C10.019 17.4199 9.85663 17.7025 9.8124 18.0115L8.0092 31.213C7.99693 31.2926 7.99693 31.3734 8.0092 31.453C8.0092 31.6804 8.10419 31.8984 8.27327 32.0592C8.44235 32.2199 8.67168 32.3102 8.9108 32.3102C9.108 32.323 9.30399 32.2725 9.46744 32.1668C9.63088 32.0611 9.75234 31.9064 9.8124 31.7273L11.9762 25.058L12.4451 23.635L13.1663 24.3893L15.222 26.5153V31.4873C15.222 31.7147 15.317 31.9327 15.4861 32.0935C15.6552 32.2542 15.8845 32.3445 16.1236 32.3445C16.3627 32.3445 16.592 32.2542 16.7611 32.0935C16.9302 31.9327 17.0252 31.7147 17.0252 31.4873V26.3439C17.0106 26.2087 16.961 26.0791 16.8809 25.9667L14.2843 22.9149L16.0875 18.6287H19.171L22.7774 21.7833C22.8601 21.8746 22.9625 21.9478 23.0776 21.9981C23.1928 22.0484 23.3179 22.0745 23.4446 22.0748C23.6676 22.0492 23.8726 21.9454 24.0194 21.7837C24.1661 21.622 24.2441 21.4139 24.238 21.2004C24.2375 20.9988 24.1607 20.804 24.0216 20.6518ZM29.6476 27.664C29.47 27.664 29.2941 27.6973 29.1301 27.7619C28.966 27.8265 28.8169 27.9212 28.6913 28.0406C28.5657 28.16 28.4661 28.3018 28.3981 28.4578C28.3302 28.6138 28.2952 28.781 28.2952 28.9499C28.2952 29.1187 28.3302 29.2859 28.3981 29.4419C28.4661 29.598 28.5657 29.7397 28.6913 29.8591C28.8169 29.9785 28.966 30.0732 29.1301 30.1378C29.2941 30.2025 29.47 30.2357 29.6476 30.2357C30.0063 30.2357 30.3503 30.1003 30.6039 29.8591C30.8575 29.618 31 29.2909 31 28.9499C31 28.6088 30.8575 28.2818 30.6039 28.0406C30.3503 27.7995 30.0063 27.664 29.6476 27.664ZM23.8052 25.0408V23.7721C23.8052 23.6585 23.7577 23.5494 23.6732 23.4691C23.5887 23.3887 23.474 23.3435 23.3544 23.3435C23.2349 23.3435 23.1202 23.3887 23.0357 23.4691C22.9511 23.5494 22.9036 23.6585 22.9036 23.7721V25.0408C22.7688 25.1129 22.6562 25.2173 22.5771 25.3436C22.4979 25.47 22.4551 25.6139 22.4528 25.7609V31.4873C22.4528 31.7147 22.5478 31.9327 22.7169 32.0935C22.886 32.2542 23.1153 32.3445 23.3544 32.3445C23.5935 32.3445 23.8229 32.2542 23.992 32.0935C24.161 31.9327 24.256 31.7147 24.256 31.4873V25.7609C24.2537 25.6139 24.2109 25.47 24.1318 25.3436C24.0527 25.2173 23.9401 25.1129 23.8052 25.0408Z"
                              fill="#492828"
                            />
                          </svg>
                        </Grid>
                        <Grid
                          item
                          sx={{
                            color: "#6E6E6E",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                        >
                          Cricket Pitch
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid container gap={2} direction={"column"}>
            <Grid>
              <Typography
                sx={{ color: "#1D3A76", fontSize: "2rem", fontWeight: 600 }}
              >
                LAKESCAPE Amenities
              </Typography>
              <Typography
                sx={{ color: "#00609E", fontSize: "1rem", fontWeight: 600 }}
              >
                Kondapur, Hyderabad
              </Typography>
            </Grid>
            <Grid
              container
              sx={{
                backgroundColor: "#F3F3F3",
                padding: "1.5rem",
                borderRadius: "1rem",
              }}
            >
              <Grid
                container
                justifyContent={"center"}
                color={"#00609E"}
                fontSize={"24px"}
                fontWeight={500}
              >
                Around This Property
              </Grid>
              <Grid
                container
                columnSpacing={2}
                rowSpacing={4}
                pb={2}
                width={"70%"}
                margin={"auto"}
              >
                {[1, 2, 3, 4].map((item) => {
                  return (
                    <Grid item md={6}>
                      <Grid
                        container
                        gap={2}
                        alignItems={"center"}
                        sx={{
                          backgroundColor: "#FFFFFF",
                          borderRadius: "0.5rem",
                          padding: "1rem",
                        }}
                      >
                        <Grid item xs="auto">
                          <svg
                            width="36"
                            height="40"
                            viewBox="0 0 36 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.5 30.644H21.834M21.834 3.55687C21.834 3.28321 21.7801 3.01223 21.6753 2.75942C21.5706 2.5066 21.4171 2.27691 21.2235 2.08345C21.03 1.88999 20.8003 1.73656 20.5474 1.63192C20.2946 1.52729 20.0236 1.4735 19.75 1.47363H15.584C15.3104 1.4735 15.0394 1.52729 14.7866 1.63192C14.5337 1.73656 14.304 1.88999 14.1105 2.08345C13.9169 2.27691 13.7634 2.5066 13.6587 2.75942C13.5539 3.01223 13.5 3.28321 13.5 3.55687V5.64111H21.834V3.55687ZM30.167 34.8104H32.25C32.8025 34.8104 33.3325 34.591 33.7233 34.2003C34.1141 33.8097 34.3337 33.2798 34.334 32.7272V26.4765H30.167V34.8104ZM5.167 26.4765H1V32.7272C1 33.0009 1.05391 33.2718 1.15865 33.5247C1.2634 33.7775 1.41692 34.0072 1.61045 34.2006C1.80398 34.3941 2.03373 34.5475 2.28656 34.6522C2.5394 34.7568 2.81037 34.8106 3.084 34.8104H5.167V26.4765Z"
                              stroke="#878787"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M7.24998 18.1425C6.145 18.1423 5.08536 17.7031 4.30412 16.9216C3.52287 16.14 3.08398 15.0802 3.08398 13.9751V7.72435C3.08398 7.17184 3.30344 6.64196 3.69408 6.25128C4.08472 5.8606 4.61454 5.64111 5.16698 5.64111H30.167C30.7194 5.64111 31.2493 5.8606 31.6399 6.25128C32.0305 6.64196 32.25 7.17184 32.25 7.72435V13.9751C32.25 15.0802 31.8111 16.14 31.0299 16.9216C30.2486 17.7031 29.189 18.1423 28.084 18.1425M7.24998 18.1425H28.084M7.24998 18.1425C6.51637 18.1345 5.79785 17.933 5.16698 17.5585V36.8947C5.16698 37.4472 5.38644 37.9771 5.77708 38.3678C6.16772 38.7584 6.69754 38.9779 7.24998 38.9779H28.084C28.6364 38.9779 29.1663 38.7584 29.5569 38.3678C29.9475 37.9771 30.167 37.4472 30.167 36.8947V17.5585C29.5361 17.933 28.8176 18.1345 28.084 18.1425"
                              stroke="#878787"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M17.667 16.0586V20.2256"
                              stroke="#878787"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Grid>
                        <Grid
                          item
                          sx={{
                            color: "#00609E",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                          xs
                        >
                          International Schools
                        </Grid>
                        <Grid
                          item
                          sx={{
                            color: "#6E6E6E",
                            fontSize: "16px",
                            fontWeight: 600,
                          }}
                          xs="auto"
                        >
                          <Button
                            sx={{
                              textTransform: "none",
                              fontSize: "16px",
                              backgroundColor: "#1F3C88",
                              color: "#fff",
                              padding: "0.3rem 0.5rem",
                              borderRadius: "0.5rem",
                              ":hover": { backgroundColor: "#E28B6D" },
                            }}
                          >
                            200m
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid container gap={2} direction={"column"}>
            <Typography
              sx={{ color: "#1D3A76", fontSize: "2rem", fontWeight: 600 }}
            >
              LAKESCAPE Overview
            </Typography>
            <Grid
              container
              sx={{
                backgroundColor: "#F3F3F3",
                padding: "1.5rem",
                borderRadius: "1rem",
              }}
            >
              <Grid
                container
                justifyContent={"flex-end"}
                gap={2}
                alignItems={"center"}
                py={"1rem"}
              >
                <HeartIcon />
                <CarouselShareIcon />
                <span
                  style={{
                    backgroundColor: "#079E9E",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 1rem",
                    display: "flex",
                  }}
                >
                  Ask for Details
                </span>
              </Grid>
              <Grid container columnSpacing={2} rowSpacing={6} pb={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                  return (
                    <Grid item md={3}>
                      <Grid container gap={2} alignItems={"center"}>
                        <Grid item>
                          <svg
                            width="28"
                            height="29"
                            viewBox="0 0 28 29"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M24.9992 20.7088V8.4243C25.6815 8.24943 26.3054 7.89708 26.8076 7.40305C27.3098 6.90902 27.6722 6.29089 27.8583 5.61143C28.0443 4.93197 28.0472 4.21537 27.8668 3.5344C27.6864 2.85344 27.3289 2.23236 26.8309 1.73422C26.3328 1.23608 25.7118 0.878628 25.0309 0.698159C24.35 0.51769 23.6335 0.52063 22.9541 0.706682C22.2747 0.892734 21.6566 1.25527 21.1627 1.75748C20.6687 2.25969 20.3164 2.88369 20.1415 3.56611H7.85846C7.68361 2.88369 7.33131 2.25969 6.83733 1.75748C6.34335 1.25527 5.72529 0.892734 5.04591 0.706682C4.36652 0.52063 3.65001 0.51769 2.96912 0.698159C2.28824 0.878628 1.66722 1.23608 1.16914 1.73422C0.671061 2.23236 0.31365 2.85344 0.133202 3.5344C-0.0472464 4.21537 -0.0443061 4.93197 0.141724 5.61143C0.327755 6.29089 0.69025 6.90902 1.1924 7.40305C1.69455 7.89708 2.31848 8.24943 3.00083 8.4243V20.7088C2.31848 20.8837 1.69455 21.236 1.1924 21.73C0.69025 22.2241 0.327755 22.8422 0.141724 23.5217C-0.0443061 24.2011 -0.0472464 24.9177 0.133202 25.5987C0.31365 26.2796 0.671061 26.9007 1.16914 27.3989C1.66722 27.897 2.28824 28.2545 2.96912 28.4349C3.65001 28.6154 4.36652 28.6125 5.04591 28.4264C5.72529 28.2403 6.34335 27.8778 6.83733 27.3756C7.33131 26.8734 7.68361 26.2494 7.85846 25.567H20.1415C20.3164 26.2494 20.6687 26.8734 21.1627 27.3756C21.6566 27.8778 22.2747 28.2403 22.9541 28.4264C23.6335 28.6125 24.35 28.6154 25.0309 28.4349C25.7118 28.2545 26.3328 27.897 26.8309 27.3989C27.3289 26.9007 27.6864 26.2796 27.8668 25.5987C28.0472 24.9177 28.0443 24.2011 27.8583 23.5217C27.6722 22.8422 27.3098 22.2241 26.8076 21.73C26.3054 21.236 25.6815 20.8837 24.9992 20.7088ZM23.9993 2.56607C24.3948 2.56607 24.7814 2.68337 25.1103 2.90315C25.4392 3.12292 25.6955 3.43529 25.8469 3.80075C25.9982 4.16622 26.0378 4.56837 25.9607 4.95635C25.8835 5.34432 25.693 5.7007 25.4134 5.98042C25.1337 6.26013 24.7773 6.45062 24.3894 6.5278C24.0015 6.60497 23.5994 6.56536 23.2339 6.41398C22.8685 6.2626 22.5562 6.00624 22.3364 5.67733C22.1167 5.34842 21.9994 4.96173 21.9994 4.56615C21.9994 4.0357 22.2101 3.52697 22.5851 3.15188C22.9602 2.77679 23.4689 2.56607 23.9993 2.56607ZM2.0009 4.56615C2.0009 4.17057 2.11819 3.78388 2.33794 3.45497C2.55768 3.12605 2.87002 2.8697 3.23544 2.71832C3.60087 2.56694 4.00297 2.52733 4.3909 2.6045C4.77883 2.68167 5.13517 2.87216 5.41486 3.15188C5.69454 3.4316 5.88501 3.78798 5.96217 4.17595C6.03934 4.56393 5.99974 4.96608 5.84837 5.33155C5.69701 5.69701 5.44068 6.00938 5.11181 6.22915C4.78293 6.44893 4.39628 6.56623 4.00075 6.56623C3.47036 6.56623 2.96169 6.35551 2.58664 5.98042C2.2116 5.60533 2.0009 5.0966 2.0009 4.56615ZM4.00075 26.567C3.60522 26.567 3.21857 26.4497 2.88969 26.2299C2.56082 26.0102 2.30449 25.6978 2.15313 25.3323C2.00177 24.9669 1.96216 24.5647 2.03933 24.1767C2.11649 23.7888 2.30696 23.4324 2.58664 23.1527C2.86633 22.8729 3.22267 22.6825 3.6106 22.6053C3.99853 22.5281 4.40064 22.5677 4.76606 22.7191C5.13148 22.8705 5.44382 23.1268 5.66357 23.4557C5.88331 23.7847 6.0006 24.1714 6.0006 24.5669C6.0006 25.0974 5.7899 25.6061 5.41486 25.9812C5.03981 26.3563 4.53114 26.567 4.00075 26.567ZM20.1415 23.5669H7.85846C7.67877 22.8796 7.31933 22.2526 6.81707 21.7503C6.31482 21.248 5.68787 20.8885 5.00068 20.7088V8.4243C5.68787 8.24459 6.31482 7.88511 6.81707 7.38279C7.31933 6.88048 7.67877 6.25346 7.85846 5.56619H20.1415C20.3212 6.25346 20.6807 6.88048 21.1829 7.38279C21.6852 7.88511 22.3121 8.24459 22.9993 8.4243V20.7088C22.3117 20.8875 21.6842 21.2467 21.1818 21.7492C20.6794 22.2516 20.3203 22.8792 20.1415 23.5669ZM23.9993 26.567C23.6037 26.567 23.2171 26.4497 22.8882 26.2299C22.5593 26.0102 22.303 25.6978 22.1516 25.3323C22.0003 24.9669 21.9607 24.5647 22.0378 24.1767C22.115 23.7888 22.3055 23.4324 22.5851 23.1527C22.8648 22.8729 23.2212 22.6825 23.6091 22.6053C23.997 22.5281 24.3991 22.5677 24.7646 22.7191C25.13 22.8705 25.4423 23.1268 25.6621 23.4557C25.8818 23.7847 25.9991 24.1714 25.9991 24.5669C25.9983 25.0971 25.7874 25.6054 25.4125 25.9803C25.0376 26.3552 24.5294 26.5662 23.9993 26.567Z"
                              fill="#492828"
                            />
                          </svg>
                        </Grid>
                        <Grid item>
                          <Typography
                            sx={{
                              color: "#6E6E6E",
                              fontSize: "16px",
                              fontWeight: 700,
                            }}
                          >
                            Project Area
                          </Typography>
                          <Typography
                            sx={{
                              color: "#434343",
                              fontSize: "16px",
                              fontWeight: 600,
                            }}
                          >
                            10.5 Acres.
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid container gap={2} direction={"column"}>
            <Typography
              sx={{ color: "#1D3A76", fontSize: "2rem", fontWeight: 600 }}
            >
              LAKESCAPE Specifications
            </Typography>
            <Grid
              container
              direction={"column"}
              sx={{
                backgroundColor: "#F3F3F3",
                padding: "1.5rem",
                borderRadius: "1rem",
              }}
            >
              <Grid
                container
                item
                justifyContent={"flex-end"}
                gap={2}
                alignItems={"center"}
                py={"1rem"}
              >
                <HeartIcon />
                <CarouselShareIcon />
                <span
                  style={{
                    backgroundColor: "#079E9E",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    padding: "0.5rem 1rem",
                    display: "flex",
                  }}
                >
                  Ask for Details
                </span>
              </Grid>
              <Grid item pb={2}>
                {[1, 2, 3].map((item, index) => {
                  return (
                    <Accordion sx={{ background: "none", boxShadow: "none" }}>
                      <AccordionSummary
                        expandIcon={
                          <img src={images.accordiondrop} alt="select" />
                        }
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Grid container alignItems={"center"}>
                          <Grid item md={0.7}>
                            <img
                              src={
                                index === 0
                                  ? images.floor
                                  : index === 1
                                  ? images.fitting
                                  : images.wall
                              }
                              alt="floor"
                            />
                          </Grid>
                          <Grid item md={8}>
                            {index === 0
                              ? " Floor & Counter"
                              : index === 1
                              ? "Fitting"
                              : "Wall & Ceiling"}
                          </Grid>
                          <Grid item md={3}></Grid>
                        </Grid>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container sx={{ padding: "0rem 2rem" }}>
                          <Grid item md={4}>
                            Living/Dining
                            <br />
                            Vitrified Tiles.
                          </Grid>
                          <Grid item md={4}>
                            Master Bedroom
                            <br />
                            Vitrified Tiles.
                          </Grid>
                          <Grid item md={4}>
                            Other Bedroom
                            <br />
                            Vitrified Tiles.
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid container gap={2} direction={"column"}>
            <Typography
              sx={{ color: "#1D3A76", fontSize: "2rem", fontWeight: 600 }}
            >
              EXPLORE - MAP view
            </Typography>
            <Grid item>Map view</Grid>
          </Grid>
        </Grid>
        <Grid item md={3} pt={"1rem"} container direction={"column"} gap={3}>
          <Grid
            container
            direction={"column"}
            gap={2}
            p={"1rem"}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              boxShadow: "0px 0px 22px 0px #D2D2D2",
            }}
          >
            <Grid width={"100%"} position={"relative"}>
              <img
                style={{
                  width: "100%",
                  objectFit: "cover",
                  aspectRatio: 16 / 12,
                  borderRadius: "1rem",
                }}
                src="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg"
                alt="image"
              />
              <Grid
                sx={{ padding: "1rem", position: "absolute", top: 0, right: 0 }}
                justifyContent={"flex-end"}
                container
                gap={1}
              >
                <Button
                  sx={{
                    color: "#fff",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #fff",
                    textTransform: "none",
                  }}
                >
                  View Details
                </Button>
                <Button
                  sx={{
                    color: "#fff",
                    padding: "0.3rem 0.7rem",
                    borderRadius: "0.5rem",
                    border: "1px solid #fff",
                    textTransform: "none",
                  }}
                >
                  Contact
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              {[1, 2].map((data) => {
                return (
                  <Grid item md={6}>
                    <Card sx={{ overflow: "hidden", borderRadius: "1rem" }}>
                      <Typography
                        sx={{
                          backgroundColor: "#1D3A76",
                          color: "#ffffff",
                          textAlign: "center",
                          padding: "0.5rem 0rem",
                        }}
                      >
                        Latest Property
                      </Typography>
                      <CardMedia
                        component="img"
                        sx={{ aspectRatio: 16 / 15 }}
                        image="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg"
                        alt="Paella dish"
                      />
                      <CardContent
                        sx={{
                          border: "1px solid black",
                          borderRadius: "0rem 0rem 1rem 1rem",
                          padding: "0.5rem",
                          paddingBottom: "0.5rem !important",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#492828",
                            fontSize: "28px",
                            fontWeight: 700,
                          }}
                        >
                          ₹ 2 Cr
                        </Typography>
                        <Typography
                          sx={{
                            color: "#492828",
                            fontSize: "20px",
                            fontWeight: 700,
                          }}
                        >
                          Lakescape
                        </Typography>
                        <Typography
                          sx={{
                            color: "#A4A4A4",
                            fontSize: "14px",
                            fontWeight: 600,
                          }}
                        >
                          Sell Kondapur. Telengana, India....
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid
            sx={{
              backgroundColor: "#F0F0F0",
              padding: "1rem",
              borderRadius: "1rem",
              boxShadow: "0px 0px 22px 0px #D2D2D2",
            }}
            container
            gap={1}
            direction={"column"}
          >
            <Typography
              sx={{
                color: "#434343",
                fontWeight: 700,
                fontSize: "15px",
                "& span": { color: "#1D3A76" },
              }}
            >
              More Properties By <span>Meet Owner</span>
            </Typography>
            <Grid container spacing={2}>
              <Grid item md={4.5}>
                <Grid
                  container
                  sx={{
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    border: "1px solid #2C4D60",
                  }}
                >
                  <Grid item md={4} container>
                    <img
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        aspectRatio: 16 / 16,
                      }}
                      src="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg"
                      alt="image"
                    />
                  </Grid>
                  <Grid item md={8} pl={"0.4rem"}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#492828",
                      }}
                    >
                      ₹ 1.9 Cr
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#A4A4A4",
                      }}
                    >
                      3 BHK
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#A4A4A4",
                      }}
                    >
                      1915 sq.ft
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={4.5}>
                <Grid
                  container
                  sx={{
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    border: "1px solid #2C4D60",
                  }}
                >
                  <Grid item md={4} container>
                    <img
                      style={{
                        width: "100%",
                        objectFit: "cover",
                        aspectRatio: 16 / 16,
                      }}
                      src="https://img.freepik.com/free-photo/vertical-low-angle-shot-buildings-new-york_181624-38456.jpg"
                      alt="image"
                    />
                  </Grid>
                  <Grid item md={8} pl={"0.4rem"}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#492828",
                      }}
                    >
                      ₹ 1.9 Cr
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#A4A4A4",
                      }}
                    >
                      3 BHK
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#A4A4A4",
                      }}
                    >
                      1915 sq.ft
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3} sx={{ color: "#00609E", textAlign: "center" }}>
                See all Properties
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PropertyIndetails;
