USE PRODUCTSEARCH
GO

CREATE PROCEDURE SearchProducts
  @Name NVARCHAR(255)
AS
BEGIN
  SELECT * FROM Products WHERE Name LIKE '%' + @Name + '%';
END;