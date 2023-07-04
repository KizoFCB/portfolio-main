import Image from 'next/legacy/image';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material/';
import { ChevronRight } from '@mui/icons-material';

import ShortCenteredDivider from '../ui/ShortCenteredDivider';
import getDataUrlWithShimmerEffect from '../../utils/getDataUrlWithShimmerEffect';

interface Project {
  name: string;
  imgPath: string;
  imgAlt: string;
  summary: string;
  keyFeatures: string[];
  technologies: string[];
}

interface PortfolioData {
  portfolioTitle: string;
  projects: Project[];
}

export default function Portfolio({
  portfolioData: t,
}: {
  portfolioData: PortfolioData;
}) {
  return (
    <Box component="section" id="portfolio" sx={{ pb: 8, pt: 10 }}>
      <Container>
        <Typography gutterBottom align="center" component="h2" variant="h3">
          {t.portfolioTitle}
        </Typography>

        <ShortCenteredDivider sx={{ mb: 4 }} />

        <Grid container spacing={4}>
          {t.projects.map((project) => (
            <Grid key={project.name} item lg={12} sm={6} xs={12}>
              <Card
                elevation={4}
                sx={{
                  display: 'flex',
                  height: '100%',
                  flexDirection: {
                    xs: 'column',
                    lg: 'row',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    flex: {
                      lg: '1 1 600px',
                    },
                  }}
                >
                  <div>
                    <Image
                      alt={project.imgAlt}
                      blurDataURL={getDataUrlWithShimmerEffect(600, 370)}
                      height={370}
                      layout="responsive"
                      placeholder="blur"
                      src={`/${project.imgPath}`}
                      width={600}
                    />
                  </div>
                </Box>

                <CardContent
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    width: {
                      lg: '80%',
                    },
                  }}
                >
                  <div>
                    <Typography sx={{ display: 'inline-block' }} variant="h5">
                      {project.name}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      component="p"
                      variant="subtitle1"
                    >
                      {project.summary}
                    </Typography>

                    <List
                      dense
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > *': {
                          flex: {
                            xs: '0 0 100%',
                            lg: '0 0 50%',
                          },
                        },
                      }}
                    >
                      {project.keyFeatures.map((feature) => (
                        <ListItem key={feature}>
                          <ListItemIcon sx={{ minWidth: 34 }}>
                            <ChevronRight color="secondary" />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </div>

                  <div>
                    {project.technologies.map((e) => (
                      <Chip
                        key={e}
                        label={e}
                        size="small"
                        sx={{ m: 0.5 }}
                        variant="outlined"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
