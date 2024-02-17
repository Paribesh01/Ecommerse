import React from "react";

const Product = () => {
  return (
    <div class="font-[sans-serif]">
      <div class="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src="https://readymadeui.com/images/product2.webp"
              alt="Product"
              class="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 class="text-2xl font-extrabold text-gray-800">
              Adjective Attire | T-shirt
            </h2>
            <div class="flex flex-wrap gap-4 mt-4">
              <p class="text-gray-800 text-xl font-bold">$12</p>
              <p class="text-gray-400 text-xl">
                <strike>$16</strike>{" "}
                <span class="text-sm ml-1">Tax included</span>
              </p>
            </div>
            <div class="flex space-x-2 mt-4">
              <svg
                class="w-5 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                class="w-5 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                class="w-5 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                class="w-5 fill-gray-800"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
              <svg
                class="w-5 fill-[#CED5D8]"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            </div>
            <div class="mt-8">
              <button
                type="button"
                class="w-full mt-4 px-4 py-3 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded"
              >
                Add to cart
              </button>
            </div>
            <div class="mt-8">
              <h3 class="text-lg font-bold text-gray-800">About the item</h3>
              <ul class="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-800">
                <li>
                  A gray t-shirt is a wardrobe essential because it is so
                  versatile.
                </li>
                <li>
                  Available in a wide range of sizes, from extra small to extra
                  large, and even in tall and petite sizes.
                </li>
                <li>
                  This is easy to care for. They can usually be machine-washed
                  and dried on low heat.
                </li>
                <li>
                  You can add your own designs, paintings, or embroidery to make
                  it your own.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
