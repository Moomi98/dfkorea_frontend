interface IWords {
  [key: string]: Record<string, string>;
}

const words: IWords = {
  Common: {
    cancel: "취소",
    register: "등록",
    title: "제목",
    subtitle: "부제목",
    more: "자세히 보기",
  },

  Header: {
    logo: "DF Korea",
    productList: "제품 목록",
    workRecord: "공사 현황",
  },

  Login: {
    invalid: "계정이 일치하지 않습니다.",
  },

  Admin: {
    write: "글 쓰기",
    stockManagement: "재고 관리",
    thumbnail: "이 곳에 썸네일을 등록해주세요.",
    warning: "사진의 크기는 20mb 이하만 등록 가능합니다.",
  },
};

export default function getWord(target: string, key: string): string {
  return words[target][key];
}
