const fs = require("fs");
const { getStartHtml, generateHtml } = require("./html");

jest.mock("fs");

describe("Tests getStartHtml", () => {
    test("empty, null, undefined should return emptry string", () => {
        [null, undefined, ""].forEach((p) => expect(getStartHtml(p)).toBe(""));
    });

    test("relative file path should html", () => {
        const path = "html";
        const expectedHtml = `<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\">
    <title>${path}</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  </head>
  <body>`;
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue(path);
        expect(getStartHtml(path)).toBe(expectedHtml);
    });

    test("relative file path should return html", () => {
        const path = "html";
        const language = "fr";
        const expectedHtml = `<!doctype html>
<html lang=\"fr\">
  <head>
    <meta charset=\"utf-8\">
    <title>${path}</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  </head>
  <body>`;
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue(path);
        expect(getStartHtml(path, language)).toBe(expectedHtml);
    });

    test("relative file path with a space should return html", () => {
        const path = "this is html";
        const expectedHtml = `<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\">
    <title>${path}</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  </head>
  <body>`;
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue(path);
        expect(getStartHtml(path)).toBe(expectedHtml);
    });

    test("relative file path with a space should return html", () => {
        const path = "this is html";
        const language = "fr";
        const expectedHtml = `<!doctype html>
<html lang=\"fr\">
  <head>
    <meta charset=\"utf-8\">
    <title>${path}</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  </head>
  <body>`;
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue(path);
        expect(getStartHtml(path, language)).toBe(expectedHtml);
    });

    test("absolute Unix file path should return html", () => {
        const path = "/abc";
        const expectedHtml = `<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\">
    <title>${path}</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  </head>
  <body>`;
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue(path);
        expect(getStartHtml(path)).toBe(expectedHtml);
    });

    test("absolute Unix file path should return html", () => {
        const path = "/abc";
        const language = "fr";
        const expectedHtml = `<!doctype html>
<html lang=\"fr\">
  <head>
    <meta charset=\"utf-8\">
    <title>${path}</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  </head>
  <body>`;
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue(path);
        expect(getStartHtml(path, language)).toBe(expectedHtml);
    });

    test("absolute Windows file path should return html", () => {
        const path = "abc";
        const expectedHtml = `<!doctype html>
<html lang=\"en\">
  <head>
    <meta charset=\"utf-8\">
    <title>${path}</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  </head>
  <body>`;
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue(path);
        expect(getStartHtml(path)).toBe(expectedHtml);
    });

    test("absolute Windows file path should return html", () => {
        const path = "abc";
        const language = "fr";
        const expectedHtml = `<!doctype html>
<html lang=\"fr\">
  <head>
    <meta charset=\"utf-8\">
    <title>${path}</title>
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
  </head>
  <body>`;
        fs.lstatSync = jest.fn();
        fs.lstatSync.mockReturnValue(path);
        expect(getStartHtml(path, language)).toBe(expectedHtml);
    });
});

describe("Tests generateHtml", () => {
    test("empty, null, undefined should return undefined", () => {
        [null, undefined, ""].forEach((p) =>
            expect(generateHtml(p)).toBe(undefined)
        );
    });

    test("fileContent should return undefined", () => {
        const fileContent = {
            fileName: "inputMD",
            outputFolder: "dist",
            paragraphs: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
            ],
            language: "en",
            htmlBody: `<!doctype html>
            <html lang=en>
              <head>
                <meta charset="utf-8">
                <title>Hello world</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
              </head>
              <body>`,
        };
        expect(generateHtml(fileContent)).toBe(undefined);
    });

    test("fileContent with no paragraphs should return undefined", () => {
        const fileContent = {
            fileName: "",
            outputFolder: "dist",
            paragraphs: [],
            language: "en",
            htmlBody: `<!doctype html>
        <html lang=en>
          <head>
            <meta charset="utf-8">
            <title>Hello world</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>`,
        };
        expect(generateHtml(fileContent)).toBe(undefined);
    });
});