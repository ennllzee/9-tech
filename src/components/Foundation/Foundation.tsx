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
    fontSize: '2rem',
    '@media (min-width:300px)': {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '5rem',
    }
  },
  body: {
    color: "white",
    padding: "3%",
    textIndent: "1.5rem",
    fontSize: '.75rem',
    '@media (min-width:300px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem',
      textIndent: "4rem",
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.75rem',
      textIndent: "5rem",
    },
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
          <Typography
            align="inherit"
            variant="body1"
            className={classes.body}
            paragraph={true}
          >
            บริษัท นายย์ เทคนิคอล เซอร์วิส จำกัด ก่อตั้งขึ้นเมื่อปี 2554
            บริหารงานโดยบุคคลที่มีประสบการณ์ในการทำงานมากกว่า 20 ปี
            ดำเนินธุรกิจเกี่ยวกับงานออกแบบ ติดตั้ง ซ่อมแซม
            และแก้ไขระบบไฟฟ้าของเครื่องจักรและโรงงานอุตสาหกรรม
            รวมถึงบริการหลังการติดตั้ง วิเคราะห์ถึงความต้องการของลูกค้าในทุก ๆ
            ด้าน โดยทีมงานผู้เชี่ยวชาญและช่างชำนาญงานเฉพาะทาง
            เน้นการทำงานอย่างละเอียดคำนึงถึงคุณภาพของผลงานที่ได้มาตรฐาน
            งานทุกชิ้นผ่านการตรวจสอบและทดสอบก่อนส่งมอบ
            เพื่อตอบสนองความต้องการของลูกค้าให้เกิดประโยชน์สูงสุดทั้งเวลาที่จำกัดและเงินที่ลงทุน
            ทำให้บริษัทได้รับความไว้วางใจจากหน่วยงานต่าง ๆ
            และโรงงานอุตสาหกรรมชั้นนำหลายแหล่ง

            {/* 
              9 Technical Service co.,ld  was established in 2011.
              Managed by people with more than 20 years of work experience 
              To carry on the business of designing, installing, repairing 
              and modifying electrical systems of machinery and industrial plants.
              including service after installation Analyzing the needs of every customer
              side by a team of experts and specialist technicians
              Especially on working in detail, taking into account the quality of the work that meets the standards, 
              every work has been inspected and tested before delivery
              In order to meet the needs of customers to get the most out of both the limited time and the money invested.
              causing the company to gain trust from various agencies
              and many leading industrial factories

            
            */}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Foundation;
