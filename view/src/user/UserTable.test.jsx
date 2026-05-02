import React from "react";
import { render, screen } from "@testing-library/react";
import UserTable from "./UserTable";

test("UserTable filled matches snapshot",function(){
    const lst = [{_id:'42c3fdb4dc0e5eb871d01e11', name:'Jhonny Test', login:'jhonny@test.com', password:'123456', permission:2 },
        {_id:'42c3fdb4dc0e5eb871d01e12',name:'H. Rocha', login:'hsrocha@loyola.edu', password:'123456',permission:1},
        {_id:'42c3fdb4dc0e5eb871d01e13',name:'John Doe', login:'jd@aol.com', password:'123456', permission:2},
        {_id:'42c3fdb4dc0e5eb871d01e14',name:'Jane Doe', login:'janed@compuserve.com', password:'123456', permission:2}
    ]; // mock data
    const {baseElement} = render(<UserTable lstUsers={lst} />);
    expect(baseElement).toMatchSnapshot();
});

test("UserTable empty matches snapshot",function(){
    const lst = [ ]; // mock data
    const {baseElement} = render(<UserTable lstUsers={lst} />);
    expect(baseElement).toMatchSnapshot();
});

test("UserTable renders on screen", function(){
    const lst = [ ]; // mock data
    render(<UserTable lstUsers={lst} />);

    const idtext = screen.getByText("ID");
    const logintext = screen.getByText("Login");

    expect(idtext).toBeInTheDocument();
    expect(logintext).toBeInTheDocument();
});