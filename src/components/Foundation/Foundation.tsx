import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    paddingTop: theme.spacing(10),
  },
  main: {
    // minHeight: "50vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/pic/bg.jpg"})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  title: {
    color: "white",
  },
  body: {
    color: "white",
    padding: "3%",
    textIndent: "1.5rem",
  },
}));

function Foundation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.main}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography align="center" variant="h3" className={classes.title}>
            FOUNDATION
          </Typography>
        </Grid>

        <Grid item xs={10} md={10} lg={8}>
          <Typography align="left" variant="body1" className={classes.body}>
            บริษัท นายย์ เทคนิคอล เซอร์วิส จำกัด ก่อตั้งขึ้นเมื่อปี 2554
            บริหารงานโดยบุคคลที่มีประสบการณ์ในการทำงานมากกว่า 20 ปี
            ดำเนินธุรกิจเกี่ยวกับงานออกแบบ ติดตั้ง ซ่อมแซม
            และแก้ไขระบบไฟฟ้าของเครื่องจักรและโรงงานอุตสาหกรรม
            รวมถึงบริการหลังการติดตั้ง วิเคราะห์ถึงความต้องการของลูกค้าในทุก ๆ
            ด้าน โดยทีมงานผู้เชี่ยวชาญและช่างชำนาญงานเฉพาะทาง
            เน้นการทำงานอย่างละเอียดคำนึงถึงคุณภาพของผลงานที่ได้มาตรฐาน
            งานทุกชิ้นผ่านการตรวจสอบและทดสอบก่อนส่งมอบ
            เพื่อตจอบสนองความต้องการของลูกค้าให้เกิดประโยชน์สูงสุดทั้งเวลาที่จำกัดและเงินที่ลงทุน
            ทำให้บริษัทได้รับความไว้วางใจจากหน่วยงานต่าง ๆ
            และโรงงานอุตสาหกรรมชั้นนำหลายแหล่ง
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Foundation;
