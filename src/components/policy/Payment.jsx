// import { yupResolver } from '@hookform/resolvers/yup';
// import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from "yup";

// const schema = yup.object().shape({
//   CreditCardNumber: yup.string().required("is required").min(16,"Valid card only").max(16,"Valid card only").matches(/^[0-9]+$/, "Numbers only"),
//   ExpirationDate: yup.string().required('is required').min(4,"Valid card only").max(4,"Valid card only").matches(/^[0-9]+$/, "Numbers only"),
//   cvv: yup.string().required('is required').min(3,"Valid card only").max(3,"Valid card only").matches(/^[0-9]+$/, "Numbers only"),
//   CardHolderFullName: yup.string().required('is required'),
//   PersonID: yup.string().required('is required').min(9,'Enter a valid ID').matches(/^[0-9]+$/,'ID can contain only numbers')
// }).required();


// export default function Payment(props) {
//   const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode:"onBlur", resolver:yupResolver(schema)});
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <>
//     <h4>you are traveling to:{props.region}
//       {props.startDate}
//     </h4>
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//       <label>Credit Card Number</label>
//       <input {...register("CreditCardNumber")} />
//       {errors?.CreditCardNumber && (
//         <p>{errors?.CreditCardNumber?.message || "Error!"}</p>
//       )}
//       </div>
//       <div>
//       <label>Expiration Date</label>
//       <input  {...register("ExpirationDate")} />
//       {errors?.ExpirationDate && (
//         <p>{errors?.ExpirationDate?.message || "Error!"}</p>
//       )}
//       </div>
//       <div>
//       <label></label>
//       <input placeholder="cvv" {...register("cvv")} />
//       {errors?.cvv && (
//         <p>{errors?.cvv?.message || "Error!"}</p>
//       )}
//       </div>
//       <div>
//       <label>Card Holder Full Name</label>
//       <input {...register("CardHolderFullName")} />
//       {errors?.CardHolderFullName && (
//         <p>{errors?.CardHolderFullName?.message || "Error!"}</p>
//       )}
//       </div>
//       <div>
//       <label>ID</label>
//       <input placeholder="ID" {...register("PersonID")} />
//       </div>
//       {errors?.PersonID && (
//         <p>{errors?.PersonID?.message || "Error!"}</p>
//         )}

//       <input type="submit" disabled={!isValid}/>
//     </form>
//         </>
//   );
// }
