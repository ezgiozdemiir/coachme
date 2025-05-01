// import * as React from 'react';

export default function BottomSheet() {}
//   const [open, setOpen] = React.useState(false);
//   const [editMode, setEditMode] = React.useState(false);
//   const [formData, setFormData] = React.useState({
//     name: 'Ezgi',
//     surname: 'Özdemir',
//     email: 'ezgi.ozdemir@example.com',
//     phone: '536-589-5538',
//     role: 'Sınav Koçu'
//   });

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditMode(false);
//   };

//   const handleEditSave = async () => {
//     if (editMode) {
//       // Send PUT request
//       try {
//         const response = await fetch('https://your-api-endpoint.com/user', {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ email: formData.email, phone: formData.phone })
//         });

//         if (response.ok) {
//           setEditMode(false);
//         } else {
//           console.error('Failed to update user info');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     } else {
//       setEditMode(true);
//     }
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Kullanıcı Bilgileri
//       </Button>
//       <Dialog
//         fullScreen
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Transition}
//       >
//         <AppBar sx={{ position: 'relative' }}>
//           <Toolbar>
//             <IconButton
//               edge="start"
//               color="inherit"
//               onClick={handleClose}
//               aria-label="close"
//             >
//               <CloseIcon />
//             </IconButton>
//             <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
//             Ayarlar
//             </Typography>
//             <Button autoFocus color="inherit" onClick={handleEditSave}>
//             {editMode ? 'Save' : 'Edit'}
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <DialogTitle>Kullanıcı Bilgileri</DialogTitle>
//         <DialogContent>
//           <TextField margin="dense" id="name" name="name" label="İsim" type="text" fullWidth variant="outlined" value={formData.name} disabled />
//           <TextField margin="dense" id="surname" name="surname" label="Soyisim" type="text" fullWidth variant="outlined" value={formData.surname} disabled />
//           <TextField margin="dense" id="email" name="email" label="Mail Adresi" type="email" fullWidth variant="outlined" value={formData.email} onChange={handleInputChange} disabled={!editMode} />
//           <TextField margin="dense" id="phone" name="phone" label="Telefon" type="tel" fullWidth variant="outlined" value={formData.phone} onChange={handleInputChange} disabled={!editMode} />
//           <TextField margin="dense" id="role" name="role" label="Rol" type="text" fullWidth variant="outlined" value={formData.role} disabled />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Close</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
