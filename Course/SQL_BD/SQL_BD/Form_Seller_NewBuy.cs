using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Seller_NewBuy : Form
    {
        public Form_Seller_NewBuy()
        {
            InitializeComponent();
        }

        private void sellerBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.sellerBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.bD_Shop_4semDataSet);
        }

        private void Form_Seller_NewBuy_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Bill". При необходимости она может быть перемещена или удалена.
            this.billTableAdapter.Fill(this.bD_Shop_4semDataSet.Bill);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Customer". При необходимости она может быть перемещена или удалена.
            this.customerTableAdapter.Fill(this.bD_Shop_4semDataSet.Customer);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Seller". При необходимости она может быть перемещена или удалена.
            this.sellerTableAdapter.Fill(this.bD_Shop_4semDataSet.Seller);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            billTableAdapter.Insert(Int32.Parse(textBox1.Text), Int32.Parse(textBox2.Text), DateTime.Now, null);

            this.Close();
            Form FSNN = new Form_Seller_NewBuy_NewProduct();
            FSNN.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FS = new Form_Seller();
            FS.Show();
        }
    }
}
