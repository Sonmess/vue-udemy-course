<template>
  <div class="container">
    <div class="row border p-4 my-5 rounded">
      <div class="col-9">
        <form @submit.prevent="handleSubmit">
          <div class="h2 text-center text-success">Create Product</div>
          <hr />
          <div v-if="errorList.length > 0" class="alert alert-danger pb-0">
            Please fix the following errors:
            <ul>
              <li v-for="error in errorList">{{ error }}</li>
            </ul>
          </div>

          <div class="mt-3">
            <span class="text-muted">Name</span>
            <input type="text" class="form-control" v-model.trim="product.name" />
          </div>
          <div class="mt-3">
            <span class="text-muted">Description</span>
            <textarea
              type="text"
              class="form-control"
              v-model.trim="product.description"
            ></textarea>
          </div>
          <div class="mt-3">
            <span class="text-muted">Price</span>
            <input type="number" class="form-control" v-model.number="product.price" />
          </div>

          <div class="mt-3">
            <span class="text-muted">Sale Price</span>
            <input type="number" class="form-control" v-model.number="product.salePrice" />
          </div>
          <div class="mt-3">
            <span class="text-muted">Tags (comma-seperated)</span>
            <input
              type="text"
              class="form-control"
              placeholder="e.g., modern, classic, luxury"
              v-model="product.tags"
            />
          </div>
          <div class="form-check form-switch pt-3">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              v-model="product.isBestSeller"
            />

            <label class="form-check-label" for="bestseller"> Bestseller </label>
          </div>
          <div class="mt-3">
            <label class="text-muted">Category</label>
            <select class="form-select" v-model="product.category">
              <option v-for="option in PRODUCT_CATEGORIES" :key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label">Image</label>
            <div class="input-group">
              <input type="file" class="form-control" />
            </div>
          </div>
          <div class="pt-3">
            <button class="btn btn-success m-2 w-50" :class="{ isLoading: 'disabled' }">
              <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>Submit
            </button>
            <a href="/" class="btn btn-secondary m-2 w-40"> Cancel </a>
          </div>
        </form>
      </div>
      <div class="col-3">
        <img
          :src="`https://placehold.co/600x400`"
          class="img-fluid w-100 m-3 p-3 rounded"
          alt="Product
        preview"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PRODUCT_CATEGORIES } from '@/constants/appConstants'
import sweetAlert from '@/utility/useSwal'
import productService from '@/services/productService'
import { APP_ROUTE_NAMES } from '@/constants/routeNames'

const router = useRouter()
const isLoading = ref(false)
const errorList = reactive([])

const product = reactive({
  name: '',
  description: '',
  price: 0,
  salePrice: 0,
  tags: [],
  isBestSeller: false,
  category: '',
  image: 'https://placehold.co/600x400',
})

const handleSubmit = async () => {
  try {
    isLoading.value = true
    errorList.length = 0
    await new Promise((resolve) => setTimeout(resolve, 1500))

    if (product.name.length < 3) {
      errorList.push('Name should be atleast 3 chars long')
    }
    if (product.price <= 0) {
      errorList.push('Price should be greater than 0')
    }
    if (product.category.length === 0) {
      errorList.push('Please select a category')
    }

    if (errorList.length > 0) {
      throw new Error('Invalid data')
    }

    const productData = {
      ...product,
      price: Number(product.price),
      salePrice: product.salePrice ? Number(product.salePrice) : null,
      tags: product.tags.length > 0 ? product.tags.split(',').map((tag) => tag.trim()) : [],
      isBestSeller: Boolean(product.isBestSeller),
    }
    await productService.createProduct(productData)
    sweetAlert.showSuccess('Product created successfully!')
    router.push({ name: APP_ROUTE_NAMES.PRODUCT_LIST })
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
  console.log(product)
}
</script>
