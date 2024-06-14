USE PRODUCTSEARCH
GO

CREATE PROCEDURE InsertProduct
  @Name NVARCHAR(255),
  @Price DECIMAL(10, 2)
AS
BEGIN
  INSERT INTO Products (Name, Price) VALUES (@Name, @Price);
END;