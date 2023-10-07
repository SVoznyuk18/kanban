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
