import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useAppContext } from "./useAppContext";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const { organization, setOrganization } = useAppContext();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Organization not found");
        }
        return response.json();
      })
      .then((json) => setMembers(json))
      .catch(() => {
        alert("No members found in the last search. Reverting to Lemoncode.");
        setOrganization("lemoncode");
      });
  }, [organization]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, []);

  const handleSearchChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOrganization(inputRef.current?.value);
  };

  return (
    <>
      <header className="input-container">
        <input
          type="text"
          className="list-user-input"
          ref={inputRef}
          defaultValue={organization}
        />
        <Button
          variant="contained"
          onClick={handleSearchChange}
          style={{ height: "40px" }}
        >
          Fetch Members
        </Button>
      </header>
      <Paper sx={{ width: "100%" }} elevation={5}>
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: "calc(100vh - 80px)",
            overflow: "auto",
            display: "flex", // Centrar contenido
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Avatar</TableCell>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell align="center">
                    <img
                      src={member.avatar_url}
                      alt={`${member.login}'s avatar`}
                      style={{ width: 50, borderRadius: "50%" }}
                    />
                  </TableCell>
                  <TableCell align="center">{member.id}</TableCell>
                  <TableCell align="center">
                    <Link to={`/detail/${member.login}`}>{member.login}</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};
