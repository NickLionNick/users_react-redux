

const UserValidation = (values) => {
   const errors = {};

   if (!values.name || values.name === "") {
    errors.name = "Name falied";
  }

  if (!values.surname || values.surname === "") {
    errors.surname = "Surname falied";
  }

  if (!values.desc || values.desc === "") {
    errors.desc = "Desc falied";
  }

  return errors
};

export default UserValidation
