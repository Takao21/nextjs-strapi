import React from "react";
import styled from "@emotion/styled";
import { rem } from "polished";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/images/logo.svg" alt="Sites logo" />
              <span className="logo-text">Next Movies</span>
            </a>
          </Link>
        </div>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  /* background: #efefef; */
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  .logo {
    display: flex;
    align-items: center;
    .logo-text {
      color: #333333;
      font-weight: bold;
      font-size: ${rem(20)};
      margin-left: 20px;
    }
  }
`;

export default Header;
