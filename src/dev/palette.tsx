import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';
import {
  Autocomplete,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Divider,
  Drawer,
  Fab,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  InputLabel,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem, MenuList, Pagination,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider, SpeedDial, SpeedDialAction, SpeedDialIcon,
  Stack, Step, StepLabel, Stepper,
  Switch, Tab, Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import {
  Add, Cloud, ContentCopy, ContentCut, ContentPaste,
  Delete,
  Edit,
  Favorite,
  FavoriteBorder,
  FormatAlignCenter, FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight, LocationOn, Print, Restore, Save, Share
} from '@mui/icons-material';

export default () => (
  <Palette>
    <Category name="Layout">
      <Component name="Box">
        <Variant>
          <Box></Box>
        </Variant>
      </Component>
      <Component name="Container">
        <Variant>
          <Container maxWidth="sm"></Container>
        </Variant>
        <Variant name="fixed">
          <Container fixed></Container>
        </Variant>
      </Component>
      <Component name="Stack">
        <Variant>
          <Stack my={1} spacing={2}>
            <Box>Item1</Box>
            <Box>Item2</Box>
            <Box>Item3</Box>
          </Stack>
        </Variant>
        <Variant name="horizontal">
          <Stack
              my={1}
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
          >
            <Box sx={{ border: '1px dashed grey' }}>Item 1</Box>
            <Box sx={{ border: '1px dashed grey' }}>Item 2</Box>
            <Box sx={{ border: '1px dashed grey' }}>Item 3</Box>
          </Stack>
        </Variant>
      </Component>
      <Component name="Grid">
        <Variant>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <Box>xs=6 md=8</Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>xs=6 md=4</Box>
            </Grid>
            <Grid item xs={6} md={4}>
              <Box>xs=6 md=4</Box>
            </Grid>
            <Grid item xs={6} md={8}>
              <Box>xs=6 md=8</Box>
            </Grid>
          </Grid>
        </Variant>
      </Component>
      <Component name="ImageList">
        <Variant>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            <ImageListItem>
              <img
                  src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e`}
                  srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"Breakfast"}
                  loading="lazy"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                  src={`https://images.unsplash.com/photo-1522770179533-24471fcdba45`}
                  srcSet={`https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"Camera"}
                  loading="lazy"
              />
            </ImageListItem>
          </ImageList>
        </Variant>
      </Component>
    </Category>
    <Category name="Inputs">
      <Component name="Autocomplete">
        <Variant>
          <Autocomplete
              disablePortal
              options={[]}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Variant>
      </Component>
      <Component name="Button">
        <Variant name="text">
          <Button variant="text">Text</Button>
        </Variant>
        <Variant name="contained">
          <Button variant="contained" sx={{my: 2}}>Contained</Button>
        </Variant>
        <Variant name="outlined">
          <Button variant="outlined">Outlined</Button>
        </Variant>
      </Component>
      <Component name="IconButton">
        <Variant name="add">
          <IconButton aria-label="add">
            <Add/>
          </IconButton>
        </Variant>
        <Variant name="edit">
          <IconButton aria-label="edit">
            <Edit/>
          </IconButton>
        </Variant>
        <Variant name="delete">
          <IconButton aria-label="delete">
            <Delete/>
          </IconButton>
        </Variant>
      </Component>
      <Component name="Button Group">
        <Variant name="contained">
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Variant>
        <Variant name="outlined">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Variant>
        <Variant name="text">
          <ButtonGroup variant="text" aria-label="text button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Variant>
      </Component>
      <Component name="Checkbox">
        <Variant>
          <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
          </FormGroup>
        </Variant>
        <Variant name="icon">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </Variant>
      </Component>
      <Component name="Floating action button">
        <Variant>
          <Fab color="primary" aria-label="add">
            <Add />
          </Fab>
        </Variant>
      </Component>
      <Component name="Radio Group">
        <Variant>
          <FormControl component="fieldset">
            <FormLabel component="legend">Season</FormLabel>
            <RadioGroup
                aria-label="season"
                defaultValue="summer"
                name="radio-buttons-group"
            >
              <FormControlLabel value="summer" control={<Radio />} label="Summer" />
              <FormControlLabel value="autumn" control={<Radio />} label="Autumn" />
              <FormControlLabel value="winter" control={<Radio />} label="Winter" />
              <FormControlLabel value="spring" control={<Radio />} label="Spring" />
            </RadioGroup>
          </FormControl>
        </Variant>
      </Component>
      <Component name="Rating">
        <Variant>
          <Rating name="simple-controlled"/>
        </Variant>
      </Component>
      <Component name="Select">
        <Variant>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Variant>
      </Component>
      <Component name="Slider">
        <Variant>
          <Slider defaultValue={30} aria-label="Slider" />
        </Variant>
      </Component>
      <Component name="Switch">
        <Variant>
          <Switch/>
        </Variant>
        <Variant name="with label">
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Label" />
          </FormGroup>
        </Variant>
      </Component>
      <Component name="TextField">
        <Variant name="outlined">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Variant>
        <Variant name="filled">
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Variant>
        <Variant name="standard">
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Variant>
        <Variant name="select">
          <TextField
              id="outlined-select-currency"
              select
              label="Select"
              helperText="Please select your currency"
          >
            <MenuItem value="dollar">
                dollar
            </MenuItem>
            <MenuItem value="euro">
                euro
            </MenuItem>
          </TextField>
        </Variant>
      </Component>
        <Component name="ToggleButtonGroup">
            <Variant>
                <ToggleButtonGroup
                    exclusive
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeft />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenter />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRight />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified" disabled>
                        <FormatAlignJustify />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Variant>
        </Component>
    </Category>
      <Category name="Navigation">
          <Component name="BottomNavigation">
              <Variant>
                  <BottomNavigation
                      showLabels
                  >
                      <BottomNavigationAction label="Recents" icon={<Restore />} />
                      <BottomNavigationAction label="Favorites" icon={<Favorite />} />
                      <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
                  </BottomNavigation>
              </Variant>
          </Component>
        <Component name="Breadcrumbs">
          <Variant>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#">
                Home
              </Link>
              <Link
                  underline="hover"
                  color="inherit"
                  href="#products"
              >
                Products
              </Link>
              <Typography color="text.primary">Item</Typography>
            </Breadcrumbs>
          </Variant>
        </Component>
        <Component name="Drawer">
          <Variant>
            <Drawer open={true} variant={"persistent"}>
              <List>
                <ListItem>
                  <ListItemText>Item1</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemText>Item2</ListItemText>
                </ListItem>
              </List>
            </Drawer>
          </Variant>
        </Component>
        <Component name="Link">
          <Variant>
            <Link href="#">Link</Link>
          </Variant>
        </Component>
        <Component name="Menu">
          <Variant>
            <MenuList>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘C
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘V
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
              </MenuItem>
            </MenuList>
          </Variant>
        </Component>
        <Component name="Pagination">
          <Variant>
            <Pagination count={10} />
          </Variant>
        </Component>
        <Component name="SpeedDial">
          <Variant>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}>
              <SpeedDialAction
                  key={'Save'}
                  icon={<Save/>}
                  tooltipTitle={'Save'}/>
              <SpeedDialAction
                      key={'Share'}
                      icon={<Share/>}
                      tooltipTitle={'Share'}/>
              <SpeedDialAction
                      key={'Print'}
                      icon={<Print/>}
                      tooltipTitle={'Print'}/>
            </SpeedDial>
          </Variant>
        </Component>
        <Component name="Stepper">
          <Variant>
            <Stepper activeStep={1} alternativeLabel>
              <Step key={'Select master blaster campaign settings'}>
                <StepLabel>{'Select master blaster campaign settings'}</StepLabel>
              </Step>
              <Step key={'Create an ad group'}>
                <StepLabel>{'Create an ad group'}</StepLabel>
              </Step>
              <Step key={'Create an ad'}>
                <StepLabel>{'Create an ad'}</StepLabel>
              </Step>
            </Stepper>
          </Variant>
        </Component>
        <Component name="Tabs">
          <Variant>
            <Tabs value={0} aria-label="basic tabs example">
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Variant>
        </Component>
      </Category>
  </Palette>
);
