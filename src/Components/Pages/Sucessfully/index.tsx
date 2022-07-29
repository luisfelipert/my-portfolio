import React from "react";
import { useTranslation } from "react-i18next";
import { Card, Container } from "./styles";

export function Successfully() {
  const { t } = useTranslation();
  return (
    <Container>
      <Card>
        <h1>{t("translation.successfully.thank")}</h1>
        <p>{t("translation.successfully.p")}</p>
        <a href="/" tabIndex={1}>
          Voltar
        </a>
      </Card>
    </Container>
  );
}
