// id와 password 모두 공백이 아닌지 확인
export const whenIsNotEmptyIdAndPw = (object) => {
  return Object.values(object).filter((value) => value === "").length === 0;
};
