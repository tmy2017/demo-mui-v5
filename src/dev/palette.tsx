import React from 'react';
import {
  Category,
  Component,
  Variant,
  Palette,
} from '@react-buddy/ide-toolbox';
import {
  Accordion, AccordionDetails, AccordionSummary,
  Alert, AppBar,
  Autocomplete, Avatar, AvatarGroup, Backdrop, Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  ButtonGroup, Card, CardActions, CardContent,
  Checkbox, Chip, CircularProgress,
  Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
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
  InputLabel, LinearProgress,
  Link,
  List,
  ListItem, ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem, MenuList, Pagination, Paper,
  Radio,
  RadioGroup,
  Rating,
  Select, Skeleton,
  Slider, Snackbar, SpeedDial, SpeedDialAction, SpeedDialIcon,
  Stack, Step, StepLabel, Stepper,
  Switch, Tab, Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup, Toolbar, Tooltip,
  Typography
} from '@mui/material';
import {
  Add, Cloud, ContentCopy, ContentCut, ContentPaste,
  Delete, Drafts,
  Edit, ExpandMore,
  Favorite,
  FavoriteBorder,
  FormatAlignCenter, FormatAlignJustify,
  FormatAlignLeft,
  FormatAlignRight, Inbox, LocationOn, Mail, Menu, Print, Restore, Save, Share
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
            divider={<Divider orientation="vertical" flexItem/>}
            spacing={2}
          >
            <Box sx={{border: '1px dashed grey'}}>Item 1</Box>
            <Box sx={{border: '1px dashed grey'}}>Item 2</Box>
            <Box sx={{border: '1px dashed grey'}}>Item 3</Box>
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
          <ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
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
    <Category name="Typography">
      <Component name="h1">
        <Variant>
          <Typography variant="h1" gutterBottom component="h1">Heading 1</Typography>
        </Variant>
      </Component>
      <Component name="h2">
        <Variant>
          <Typography variant="h2" gutterBottom component="h2">Heading 2</Typography>
        </Variant>
      </Component>
      <Component name="h3">
        <Variant>
          <Typography variant="h3" gutterBottom component="h3">Heading 3</Typography>
        </Variant>
      </Component>
      <Component name="h4">
        <Variant>
          <Typography variant="h4" gutterBottom component="h4">Heading 4</Typography>
        </Variant>
      </Component>
      <Component name="h5">
        <Variant>
          <Typography variant="h5" gutterBottom component="h5">Heading 5</Typography>
        </Variant>
      </Component>
      <Component name="h6">
        <Variant>
          <Typography variant="h6" gutterBottom component="h6">Heading 6</Typography>
        </Variant>
      </Component>
      <Component name="subtitle1">
        <Variant>
          <Typography variant="subtitle1" gutterBottom component="div">
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Variant>
      </Component>
      <Component name="subtitle2">
        <Variant>
          <Typography variant="subtitle2" gutterBottom component="div">
            subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Variant>
      </Component>
      <Component name="body1">
        <Variant>
          <Typography variant="body1" gutterBottom>
            body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
        </Variant>
      </Component>
      <Component name="body2">
        <Variant>
          <Typography variant="body2" gutterBottom>
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
            quasi quidem quibusdam.
          </Typography>
        </Variant>
      </Component>
      <Component name="button (typography)">
        <Variant>
          <Typography variant="button" display="block" gutterBottom>button text</Typography>
        </Variant>
      </Component>
      <Component name="caption">
        <Variant>
          <Typography variant="caption" display="block" gutterBottom>caption text</Typography>
        </Variant>
      </Component>
      <Component name="overline">
        <Variant>
          <Typography variant="overline" display="block" gutterBottom>overline text</Typography>
        </Variant>
      </Component>
    </Category>
    <Category name="Inputs">
      <Component name="Autocomplete">
        <Variant>
          <Autocomplete
            disablePortal
            options={[]}
            sx={{width: 300}}
            renderInput={(params) => <TextField {...params} label="Movie"/>}
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
            <FormControlLabel control={<Checkbox defaultChecked/>} label="Label"/>
          </FormGroup>
        </Variant>
        <Variant name="icon">
          <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite/>}/>
        </Variant>
      </Component>
      <Component name="Floating action button">
        <Variant>
          <Fab color="primary" aria-label="add">
            <Add/>
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
              <FormControlLabel value="summer" control={<Radio/>} label="Summer"/>
              <FormControlLabel value="autumn" control={<Radio/>} label="Autumn"/>
              <FormControlLabel value="winter" control={<Radio/>} label="Winter"/>
              <FormControlLabel value="spring" control={<Radio/>} label="Spring"/>
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
          <Slider defaultValue={30} aria-label="Slider"/>
        </Variant>
      </Component>
      <Component name="Switch">
        <Variant>
          <Switch/>
        </Variant>
        <Variant name="with label">
          <FormGroup>
            <FormControlLabel control={<Switch defaultChecked/>} label="Label"/>
          </FormGroup>
        </Variant>
      </Component>
      <Component name="TextField">
        <Variant name="outlined">
          <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        </Variant>
        <Variant name="filled">
          <TextField id="filled-basic" label="Filled" variant="filled"/>
        </Variant>
        <Variant name="standard">
          <TextField id="standard-basic" label="Standard" variant="standard"/>
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
              <FormatAlignLeft/>
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              <FormatAlignCenter/>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              <FormatAlignRight/>
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
              <FormatAlignJustify/>
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
            <BottomNavigationAction label="Recents" icon={<Restore/>}/>
            <BottomNavigationAction label="Favorites" icon={<Favorite/>}/>
            <BottomNavigationAction label="Nearby" icon={<LocationOn/>}/>
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
                <ContentCut fontSize="small"/>
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘X
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopy fontSize="small"/>
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘C
              </Typography>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPaste fontSize="small"/>
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
              <Typography variant="body2" color="text.secondary">
                ⌘V
              </Typography>
            </MenuItem>
            <Divider/>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small"/>
              </ListItemIcon>
              <ListItemText>Web Clipboard</ListItemText>
            </MenuItem>
          </MenuList>
        </Variant>
      </Component>
      <Component name="Pagination">
        <Variant>
          <Pagination count={10}/>
        </Variant>
      </Component>
      <Component name="SpeedDial">
        <Variant>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{position: 'absolute', bottom: 16, right: 16}}
            icon={<SpeedDialIcon/>}>
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
            <Tab label="Item One"/>
            <Tab label="Item Two"/>
            <Tab label="Item Three"/>
          </Tabs>
        </Variant>
      </Component>
    </Category>
    <Category name="Data Display">
      <Component name="Avatar">
        <Variant>
          <Avatar>N</Avatar>
        </Variant>
      </Component>
      <Component name="Badge">
        <Variant>
          <Badge color="secondary" badgeContent={1}>
            <Mail/>
          </Badge>
        </Variant>
      </Component>
      <Component name="Chip">
        <Variant>
          <Chip label="Chip Filled"/>
        </Variant>
        <Variant name="filled">
          <Chip label="Chip Outlined" variant="outlined"/>
        </Variant>
      </Component>
      <Component name="Divider">
        <Variant>
          <Divider/>
        </Variant>
      </Component>
      <Component name="List">
        <Variant>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Inbox/>
                </ListItemIcon>
                <ListItemText primary="Inbox"/>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Drafts/>
                </ListItemIcon>
                <ListItemText primary="Drafts"/>
              </ListItemButton>
            </ListItem>
          </List>
        </Variant>
      </Component>
      <Component name="Tooltip">
        <Variant>
          <Tooltip title="Add" arrow>
            <Button>Arrow</Button>
          </Tooltip>
        </Variant>
      </Component>
    </Category>
    <Category name="Feedback">
      <Component name="Alert">
        <Variant name="error">
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </Variant>    
        <Variant name="warning">
          <Alert severity="warning">This is a warning alert — check it out!</Alert>
        </Variant>
        <Variant name="info">
          <Alert severity="info">This is an info alert — check it out!</Alert>
        </Variant>
        <Variant name="success">
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </Variant>
      </Component>
      <Component name="Backdrop">
        <Variant>
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        </Variant>
      </Component>
      <Component name="Dialog">
        <Variant>
          <Dialog
            open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Google's location service?"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button>Disagree</Button>
              <Button autoFocus>
                Agree
              </Button>
            </DialogActions>
          </Dialog>
        </Variant>
      </Component>
      <Component name="Progress">
        <Variant name="circular">
          <CircularProgress />
        </Variant>
        <Variant name="linear">
          <LinearProgress />
        </Variant>
      </Component>
      <Component name="Skeleton">
        <Variant>
          <Stack spacing={1}>
            <Skeleton variant="text" />
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={118} />
          </Stack>
        </Variant>
        <Variant name="text">
          <Skeleton variant="text" />
        </Variant>
        <Variant name="circular">
          <Skeleton variant="circular" />
        </Variant>
        <Variant name="rectangular">
          <Skeleton variant="rectangular" />
        </Variant>
      </Component>
      <Component name="Snackbar">
        <Variant>
          <Snackbar
            open={true}
            autoHideDuration={6000}
            message="Note archived"
          />
        </Variant>
      </Component>
    </Category>
    <Category name="Surfaces">
      <Component name="Accordion">
        <Variant>
          <Stack>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Accordion 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Variant>
      </Component>
      <Component name="AppBar">
        <Variant>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Variant>
      </Component>
      <Component name="Card">
        <Variant>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                benevolent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Variant>
      </Component>
      <Component name="Paper">
        <Variant>
          <Paper>elevation 0</Paper>
        </Variant>
        <Variant name="elevation 1">
          <Paper elevation={1}>elevation 1</Paper>
        </Variant>
        <Variant name="elevation 2">
          <Paper elevation={2}>elevation 2</Paper>
        </Variant>
        <Variant name="elevation 3">
          <Paper elevation={3}>elevation 3</Paper>
        </Variant>
        <Variant name="elevation 4">
          <Paper elevation={4}>elevation 4</Paper>
        </Variant>
        <Variant name="elevation 6">
          <Paper elevation={6}>elevation 6</Paper>
        </Variant>
        <Variant name="elevation 8">
          <Paper elevation={8}>elevation 8</Paper>
        </Variant>
        <Variant name="elevation 12">
          <Paper elevation={12}>elevation 12</Paper>
        </Variant>
        <Variant name="elevation 16">
          <Paper elevation={16}>elevation 16</Paper>
        </Variant>
        <Variant name="elevation 24">
          <Paper elevation={24}>elevation 24</Paper>
        </Variant>
      </Component>
    </Category>
  </Palette>
);
