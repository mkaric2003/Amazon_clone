import 'dart:convert';

class Product {
  final String name;
  final String description;
  final double price;
  final int quantity;
  final String category;
  final List<String> images;
  final String? id;

  Product({
    required this.name,
    required this.category,
    required this.description,
    required this.images,
    required this.price,
    required this.quantity,
    this.id,
  });

  Map<String, dynamic> toMap() {
    return {
      'name': name,
      'description': description,
      'quantity': quantity,
      'images': images,
      'category': category,
      'price': price,
      'id': id,
    };
  }

  factory Product.fromMap(Map<String, dynamic> map) {
    return Product(
      name: map['name'] ?? '',
      category: map['category'] ?? '',
      description: map['description'] ?? '',
      images: List<String>.from(map['images']),
      price: map['price'] ?? 0.0,
      quantity: map['quantity'] ?? 0,
      id: map['_id'],
    );
  }

  String toJson() => json.encode(toMap());

  factory Product.fromJson(String source) =>
      Product.fromMap(json.decode(source));
}
