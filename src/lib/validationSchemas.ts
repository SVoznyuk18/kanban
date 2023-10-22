import * as yup from "yup";

export const createAddNewBoardValidationSchema = (isMatchBoardName: (value: string) => boolean) => {
  return yup.object().shape({
    boardName: yup.string().required("Required field")
      .test('unique-board-name', 'Board name must be unique', (value) => {
        const contextIsMatch = isMatchBoardName(value);
        return !contextIsMatch;
      }),
    columns: yup.array().of(
      yup.object().shape({
        columnName: yup.string().required("Required field"),
        // columnId: yup.string().required("Required field"),
      })
    ),
  });
};

export const editBoardValidationSchema = yup.object().shape({
  boardName: yup.string().required("Required field"),
  columns: yup.array().of(
    yup.object().shape({
      columnName: yup.string().required("Required field"),
      // columnId: yup.string().required("Required field"),
    })
  ),
});

export const addNewTaskValidationSchema = yup.object().shape({
  taskName: yup.string().required("Required field"),
  description: yup.string().required("Required field"),
  status: yup.string().required("Required field"),
  subtasks: yup.array().of(
    yup.object().shape({
      subtaskName: yup.string().required("Required field"),
      // columnId: yup.string().required("Required field"),
    })
  ),
})


// subtasks: yup.array().of(
//   yup.object().shape({
//     subtaskName: yup.string().required("Required field"),
//     // columnId: yup.string().required("Required field"),
//   })
// ),

// subtasks: yup.array().when('subtasks', (subtasks, schema) => {
//   if (subtasks && subtasks.length > 0) {
//     return schema.of(
//       yup.object().shape({
//         subtaskName: yup.string().required("Required field"),
//         // columnId: yup.string().required("Required field"),
//       })
//     );
//   } else {
//     return schema; // No validation if subtasks is empty
//   }
// }),

// subtasks: yup.lazy((value) => {
//   if (Array.isArray(value) && value.length > 0) {
//     return yup.array().of(
//       yup.object().shape({
//         subtaskName: yup.string().required("Required field"),
//         // columnId: yup.string().required("Required field"),
//       })
//     );
//   } else {
//     return yup.mixed().notRequired(); // No validation if subtasks is empty
//   }
// }),