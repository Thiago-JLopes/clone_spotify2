import styled from "styled-components";


const ContainerAlbum = styled.div`
  background-color: transparent;
  width: 185px;
  height: 242px;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(53, 53, 53, 0.295);
  }
`;

const Capa = styled.img`
  width: 178px;
  height: 175px;
  border-radius: 5px;
`;

const TitleAlbum = styled.h3`
  color: white;
  font-weight: 500;
`;

const LabelAlbum = styled.span`
  color: rgb(145, 144, 144);
  font-size: 13px;
  font-weight: 600;
  margin-top: 3px;
`;

const Descricao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 6px;
  margin-left: 6px;
`;

const NewAlbum = styled.div`
  margin-right: 25px; /* Adicionando margem entre os álbuns */
`;

export {
  ContainerAlbum,
  Capa,
  TitleAlbum,
  LabelAlbum,
  Descricao,
  NewAlbum,
};
