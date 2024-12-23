import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const DoctorCard = ({ doctor }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={doctor.imageURL || 'public/images/hombre-del-médico-89752915.webp'}
        alt={doctor.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {doctor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Especialidad: {doctor.specialty}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Experiencia: {doctor.experience || 0} años
        </Typography>
      </CardContent>
    </Card>
  );
};

DoctorCard.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    imageURL: PropTypes.string,
  }).isRequired,
};

export default DoctorCard;
